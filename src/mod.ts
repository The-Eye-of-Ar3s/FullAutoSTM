import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void 
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");

        // Get all the in-memory json found in /assets/database
        const tables = databaseServer.getTables();

        // Find the STM item by its Id
        const STM = tables.templates.items["60339954d62c9b14ed777c06"];

        // Add Full Auto firing mode to the STM
        STM._props.weapFireType = [
            "single",
            "fullauto"
        ]
    }
}

module.exports = { mod: new Mod() }