import { ProfileHelper } from "../helpers/ProfileHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { ISuit } from "../models/eft/common/tables/ITrader";
import { ClothingItem, IBuyClothingRequestData } from "../models/eft/customization/IBuyClothingRequestData";
import { IWearClothingRequestData } from "../models/eft/customization/IWearClothingRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ILogger } from "../models/spt/utils/ILogger";
import { EventOutputHolder } from "../routers/EventOutputHolder";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { LocalisationService } from "../services/LocalisationService";
export declare class CustomizationController {
    protected logger: ILogger;
    protected eventOutputHolder: EventOutputHolder;
    protected databaseServer: DatabaseServer;
    protected saveServer: SaveServer;
    protected localisationService: LocalisationService;
    protected profileHelper: ProfileHelper;
    constructor(logger: ILogger, eventOutputHolder: EventOutputHolder, databaseServer: DatabaseServer, saveServer: SaveServer, localisationService: LocalisationService, profileHelper: ProfileHelper);
    getTraderSuits(traderID: string, sessionID: string): ISuit[];
    wearClothing(pmcData: IPmcData, wearClothingRequest: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, buyClothingRequest: IBuyClothingRequestData, sessionId: string): IItemEventRouterResponse;
    protected getTraderClothingOffer(sessionId: string, offerId: string): ISuit;
    /**
     * Has an outfit been purchased by a player
     * @param suitId clothing id
     * @param sessionID Session id
     * @returns true/false
     */
    protected outfitAlreadyPurchased(suitId: string, sessionID: string): boolean;
    /**
     * Update output object and player profile with purchase details
     * @param sessionId Session id
     * @param pmcData Player profile
     * @param clothingItems Clothing purchased
     * @param output Client response
     */
    protected payForClothingItems(sessionId: string, pmcData: IPmcData, clothingItems: ClothingItem[], output: IItemEventRouterResponse): void;
    /**
     * Update output object and player profile with purchase details for single piece of clothing
     * @param sessionId Session id
     * @param pmcData Player profile
     * @param clothingItem Clothing item purchased
     * @param output Client response
     * @returns
     */
    protected payForClothingItem(sessionId: string, pmcData: IPmcData, clothingItem: ClothingItem, output: IItemEventRouterResponse): void;
    protected getAllTraderSuits(sessionID: string): ISuit[];
}
