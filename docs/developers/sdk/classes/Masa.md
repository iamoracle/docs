[# Masa SDK
](../README.md) / [Exports](../modules.md) / Masa

# Class: Masa

## Table of contents

### Constructors

- [constructor](Masa.md#constructor)

### Properties

- [account](Masa.md#account)
- [arweaveClient](Masa.md#arweaveclient)
- [client](Masa.md#client)
- [config](Masa.md#config)
- [contracts](Masa.md#contracts)
- [creditScore](Masa.md#creditscore)
- [identity](Masa.md#identity)
- [metadata](Masa.md#metadata)
- [session](Masa.md#session)
- [soulNames](Masa.md#soulnames)
- [utils](Masa.md#utils)

## Constructors

### constructor

• **new Masa**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`MasaArgs`](../interfaces/MasaArgs.md) |

## Properties

### account

• **account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getBalances` | (`address`: `string`) => `Promise`<`undefined` \| { `ethBalance`: `BigNumber` ; `masaBalance`: `BigNumber` ; `usdcBalance`: `BigNumber` ; `wethBalance`: `BigNumber`  }\> |

___

### arweaveClient

• `Readonly` **arweaveClient**: `default`

___

### client

• `Readonly` **client**: [`MasaClient`](MasaClient.md)

___

### config

• **config**: [`MasaConfig`](../interfaces/MasaConfig.md)

___

### contracts

• **contracts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addresses` | [`Addresses`](../interfaces/Addresses.md) |
| `loadIdentityContracts` | () => `Promise`<[`IIdentityContracts`](../interfaces/IIdentityContracts.md)\> |
| `service` | [`ContractService`](ContractService.md) |

___

### creditScore

• **creditScore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`creditReportId`: `number`) => `Promise`<`boolean`\> |
| `create` | () => `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\> |
| `list` | (`address?`: `string`) => `Promise`<`undefined` \| { `metadata`: [`ICreditReport`](../interfaces/ICreditReport.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `load` | (`identityId`: `BigNumber`) => `Promise`<{ `metadata`: [`ICreditReport`](../interfaces/ICreditReport.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }[]\> |
| `mint` | (`address`: `string`, `signature`: `string`) => `Promise`<`undefined` \| { `message`: `string` ; `success`: `boolean` ; `tokenId`: `string` \| `BigNumber`  }\> |

___

### identity

• **identity**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | () => `Promise`<`boolean`\> |
| `create` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<`boolean`\> |
| `load` | (`address?`: `string`) => `Promise`<`undefined` \| `BigNumber`\> |
| `show` | (`address?`: `string`) => `Promise`<`undefined` \| { `metadata?`: [`IIdentity`](../interfaces/IIdentity.md) ; `tokenId`: `BigNumber` ; `tokenUri`: `string`  }\> |

___

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | (`url`: `string`) => `Promise`<`undefined` \| [`ICreditReport`](../interfaces/ICreditReport.md) \| [`IIdentity`](../interfaces/IIdentity.md)\> |
| `store` | (`soulName`: `string`) => `Promise`<`undefined` \| { `imageResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `imageTransaction`: `default` ; `metadataResponse`: { `data`: `any` ; `status`: `number` ; `statusText`: `string`  } ; `metadataTransaction`: `default`  }\> |

___

### session

• **session**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkLogin` | () => `Promise`<`boolean`\> |
| `login` | () => `Promise`<`undefined` \| { `address`: `string` ; `cookie`: `string` ; `userId`: `string` \| `BigNumber`  }\> |
| `logout` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |
| `sessionLogout` | () => `Promise`<`undefined` \| { `status`: `string`  }\> |

___

### soulNames

• **soulNames**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burn` | (`soulName`: `string`) => `Promise`<`void`\> |
| `create` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<`void`\> |
| `getRegistrationPrice` | (`soulName`: `string`, `duration`: `number`, `paymentMethod`: [`PaymentMethod`](../modules.md#paymentmethod)) => `Promise`<`string` \| `BigNumber`\> |
| `list` | (`address?`: `string`) => `Promise`<`undefined` \| { `index`: `string` = nameIndex; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `tokenDetails`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }[]\> |
| `loadSoulNamesByIdentityId` | (`identityId`: `BigNumber`) => `Promise`<{ `index`: `string` = nameIndex; `metadata`: `undefined` \| [`ISoulName`](../interfaces/ISoulName.md) ; `tokenDetails`: [`string`, `BigNumber`, `BigNumber`, `BigNumber`, `boolean`] & { `active`: `boolean` ; `expirationDate`: `BigNumber` ; `identityId`: `BigNumber` ; `sbtName`: `string` ; `tokenId`: `BigNumber`  } ; `tokenUri`: `string`  }[]\> |

___

### utils

• **utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version` | () => { `contractsVersion`: `string` ; `sdkVersion`: `string`  } |