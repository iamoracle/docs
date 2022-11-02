# SoulStore

*Masa Finance*

> Soul Store

Soul Store, that can mint new Soulbound Identities and Soul Name NFTs, paying a fee

*From this smart contract we can mint new Soulbound Identities and Soul Name NFTs. This minting can be done paying a fee in ETH, USDC or $MASA*

## Methods

### _getSwapAmounts

```solidity
function _getSwapAmounts(uint256 mintingPrice) external view returns (uint256 priceInStableCoin, uint256 priceInETH, uint256 priceInUtilityToken)
```

Returns the price of minting

*Returns all current pricing and amount informations for a purchase*

#### Parameters

| Name | Type | Description |
|---|---|---|
| mintingPrice | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| priceInStableCoin | uint256 | Current price in stable coin |
| priceInETH | uint256 | Current pric in native token (ETH) |
| priceInUtilityToken | uint256 | Current price in utility token ($MASA) |

### estimateSwapAmount

```solidity
function estimateSwapAmount(address _fromToken, address _toToken, uint256 _amountOut) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _fromToken | address | undefined |
| _toToken | address | undefined |
| _amountOut | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getNameRegistrationPricePerYear

```solidity
function getNameRegistrationPricePerYear(string nameLength) external view returns (uint256)
```

Returns the price of register a name per year in stable coin for an specific length

*Returns the price for registering per year in USD for an specific name length*

#### Parameters

| Name | Type | Description |
|---|---|---|
| nameLength | string | Length of the name |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | Price in stable coin for that name length |

### nameRegistrationPricePerYear

```solidity
function nameRegistrationPricePerYear(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### purchaseIdentity

```solidity
function purchaseIdentity() external payable returns (uint256)
```

Mints a new Soulbound Identity purchasing it

*This function allows the purchase of a soulbound identity for free*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | TokenId of the new soulbound identity |

### purchaseIdentityAndName

```solidity
function purchaseIdentityAndName(address paymentMethod, string name, uint256 yearsPeriod, string _tokenURI) external payable returns (uint256)
```

Mints a new Soulbound Identity and Name purchasing it

*This function allows the purchase of a soulbound identity and name using stable coin (USDC), native token (ETH) or utility token ($MASA)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| name | string | Name of the new soul name |
| yearsPeriod | uint256 | Years of validity of the name |
| _tokenURI | string | URI of the NFT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | TokenId of the new soulbound identity |

### purchaseName

```solidity
function purchaseName(address paymentMethod, string name, uint256 yearsPeriod, string _tokenURI) external payable returns (uint256)
```

Mints a new Soul Name purchasing it

*This function allows the purchase of a soul name using stable coin (USDC), native token (ETH) or utility token ($MASA)*

#### Parameters

| Name | Type | Description |
|---|---|---|
| paymentMethod | address | Address of token that user want to pay |
| name | string | Name of the new soul name |
| yearsPeriod | uint256 | Years of validity of the name |
| _tokenURI | string | URI of the NFT |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | TokenId of the new sou name |

### purchaseNameInfo

```solidity
function purchaseNameInfo(string name, uint256 yearsPeriod) external view returns (uint256 priceInStableCoin, uint256 priceInETH, uint256 priceInUtilityToken)
```

Returns the price of the name minting

*Returns all current pricing and amount informations for a purchase*

#### Parameters

| Name | Type | Description |
|---|---|---|
| name | string | Name of the new soul name |
| yearsPeriod | uint256 | Years of validity of the name |

#### Returns

| Name | Type | Description |
|---|---|---|
| priceInStableCoin | uint256 | Current price of the name minting in stable coin |
| priceInETH | uint256 | Current price of the name minting in native token (ETH) |
| priceInUtilityToken | uint256 | Current price of the name minting in utility token ($MASA) |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### reserveWallet

```solidity
function reserveWallet() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### setNameRegistrationPricePerYear

```solidity
function setNameRegistrationPricePerYear(uint256 _nameLength, uint256 _nameRegistrationPricePerYear) external nonpayable
```

Sets the price of the name registering per one year in stable coin

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nameLength | uint256 | Length of the name |
| _nameRegistrationPricePerYear | uint256 | New price of the name registering per one year in stable coin for that name length per year |

### setReserveWallet

```solidity
function setReserveWallet(address _reserveWallet) external nonpayable
```

Set the reserve wallet

*Let change the reserve walled. It can be triggered by an authorized account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _reserveWallet | address | New reserve wallet |

### setSoulboundIdentity

```solidity
function setSoulboundIdentity(contract ISoulboundIdentity _soulboundIdentity) external nonpayable
```

Sets the SoulboundIdentity contract address linked to this store

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _soulboundIdentity | contract ISoulboundIdentity | New SoulboundIdentity contract address |

### setStableCoin

```solidity
function setStableCoin(address _stableCoin) external nonpayable
```

Sets the stable coin to pay the fee in (USDC)

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _stableCoin | address | New stable coin to pay the fee in |

### setSwapRouter

```solidity
function setSwapRouter(address _swapRouter) external nonpayable
```

Sets the swap router address

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _swapRouter | address | New swap router address |

### setUtilityToken

```solidity
function setUtilityToken(address _utilityToken) external nonpayable
```

Sets the utility token to pay the fee in ($MASA)

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _utilityToken | address | New utility token to pay the fee in |

### setWrappedNativeToken

```solidity
function setWrappedNativeToken(address _wrappedNativeToken) external nonpayable
```

Sets the wrapped native token address

*The caller must have the owner to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _wrappedNativeToken | address | New wrapped native token address |

### soulboundIdentity

```solidity
function soulboundIdentity() external view returns (contract ISoulboundIdentity)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ISoulboundIdentity | undefined |

### stableCoin

```solidity
function stableCoin() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### swapRouter

```solidity
function swapRouter() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### utilityToken

```solidity
function utilityToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### wrappedNativeToken

```solidity
function wrappedNativeToken() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### SoulNamePurchased

```solidity
event SoulNamePurchased(address indexed account, uint256 tokenId, string indexed name, uint256 yearsPeriod)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| tokenId  | uint256 | undefined |
| name `indexed` | string | undefined |
| yearsPeriod  | uint256 | undefined |

### SoulboundIdentityAndNamePurchased

```solidity
event SoulboundIdentityAndNamePurchased(address indexed account, uint256 tokenId, string indexed name, uint256 yearsPeriod)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| tokenId  | uint256 | undefined |
| name `indexed` | string | undefined |
| yearsPeriod  | uint256 | undefined |

### SoulboundIdentityPurchased

```solidity
event SoulboundIdentityPurchased(address indexed account, uint256 tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| tokenId  | uint256 | undefined |


