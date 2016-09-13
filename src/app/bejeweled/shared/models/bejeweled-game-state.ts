/**
 * An enum class for tracking the current state of the Bejeweled game.
 * @enum  BejeweledGameState
 * @value AWAITING_SELECT    Waiting for the user to select a first gem
 * @value AWAITING_SECOND    Waiting for the user to select a second gem
 * @value WORKING            Waiting for the game to do some processing or animation
 */
export enum BejeweledGameState {
    AWAITING_SELECT,
    AWAITING_SECOND,
    WORKING
};
