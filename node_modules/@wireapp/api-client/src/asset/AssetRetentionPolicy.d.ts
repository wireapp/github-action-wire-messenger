/**
 * Policies can be found at:
 * https://github.com/wireapp/wire-server/blob/dc3e9a8af5250c0d045e96a31aa23c255b4e01a3/libs/cargohold-types/src/CargoHold/Types/V3.hs#L156-L177
 */
export declare enum AssetRetentionPolicy {
    ETERNAL = "eternal",
    ETERNAL_INFREQUENT_ACCESS = "eternal-infrequent_access",
    EXPIRING = "expiring",
    PERSISTENT = "persistent",
    VOLATILE = "volatile"
}
