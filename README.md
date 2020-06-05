# mailerlite-api-v2-node

[MailerLite API v2](https://developers.mailerlite.com/docs/getting-started-with-mailerlite-api) [Node.js](https://nodejs.org/en/) SDK. It is mostly a thin wrapper on [axios](https://github.com/axios/axios) that provides [authentication](https://developers.mailerlite.com/docs/authentication), response/request camelCase transformations, Typescript type definitions and some handy shorthand methods.


## Install

Using npm:

```
npm install mailerlite-api-v2-node
```

Using yarn:

```
yarn add mailerlite-api-v2-node
```


## Usage

In node:

```javascript
const MailerLite = require('mailerlite-api-v2-node').default

const mailerLite = MailerLite('YOUR_API_KEY')

// with Promises
mailerLite.getAccount().then((account) => {
  // ...
})

// with async await
async function getAccountEmail() {
  const { email } = await mailerLite.getAccount()
  return email
}
```

It is important to note that the request is resolved to response body - it does not return the full axios response object.


## Options

`axiosOptions`: `object` - additional [axios config](https://github.com/axios/axios#request-config). This config does not overwrite the explicit `baseURL` and `headers` options below.

`baseURL`: `string` - API endpoint. Defaults to `https://api.mailerlite.com/api/v2/`. Timezones endpoint has a different hardcoded baseURL.

`headers`: `object` - additional request headers. Library already includes all the necessary headers to perform requests. But these can be overwritten with this option. Defaults to `{}`.

`useCaseConverter`: `boolean` - should the library convert all query params, request body and response body to camelCase. Defaults to `true`.

## Method reference

For complete reference, visit the [official MailerLite API reference](https://developers.mailerlite.com/reference).


### Account


#### `getAccount()`

Returns your current account details. To get the raw response use `getAccountRaw()`

Alias: `getMe()`

### Batch

#### `batch(requests)`

### Campaigns

#### `actOnCampaign(campaignId, action, data)`

#### `getCampaigns(status?, params?)`

#### `getCampaignCount(status?)`

#### `createCampaign(campaign)`

#### `removeCampaign(campaignId)`

#### `setCampaignContent(campaignId, content)`

### Fields

#### `getFields()`

#### `createField(field)`

#### `updateField(fieldId, fieldUpdate)`

#### `removeField(fieldId)`

### Groups

#### `getGroups(params?)`

#### `getGroup(groupId)`

#### `createGroup(group)`

#### `updateGroup(groupId, group)`

#### `removeGroup(groupId)`

#### `addSubscriberToGroup(groupId, subscriber)`

#### `addSubscribersToGroup(groupId, subscribers, importOptions)`

#### `getSubscribersGroupImport(groupId, importId)`

#### `getGroupSubscriber(groupId, subscriberId)`

#### `getGroupSubscribers(groupId, params?)`

#### `getGroupSubscriberCount(groupId)`

#### `getGroupSubscribersByType(groupId, subscriberType, params?)`

#### `getGroupSubscribersCountByType(groupId, subscriberType)`

#### `removeGroupSubscriber(groupId, subscriberIdentifier)`

### Segments

#### `getSegments(params?)`

#### `getSegmentsCount(params?)`

#### `getSegmentsRaw(params?)`

### Settings

#### `getDoubleOptinStatus()`

Resolves to raw response object that contains `enabled` key

#### `hasEnabledDoubleOptin()`: resolve to Promise<boolean>

Shorthand that resolves to a Promise<boolean>.

#### `enableDoubleOptin()`

#### `disableDoubleOptin()`

### Stats

#### `getStats()`

### Subscribers

#### `getSubscribers(params?)`

#### `addSubscriber(subscriber)`

#### `getSubscriber(identifier)`

#### `updateSubscriber(identifier, subscriber)`

#### `searchSubscribers(params?)`

#### `getSubscriberActivity(identifier)`

#### `getSubscriberActivityByType(identifier, activityType)`

#### `getSubscriberGroups(identifier)`

### Timezones

#### `getTimezones()`

#### `getTimezone(timezoneId)`

### Webhooks

#### `getWebhooks()`

#### `getWebhooksCount()`

#### `getWebhooksRaw()`

#### `getWebhook(webhookId)`

#### `createWebhook(webhook)`

#### `updateWebhook(webhookId, webhook)`

#### `removeWebhook(webhookId)`


## Tests

Tests right now are quite limited, mostly concerned with reading data. To run them, you'll need to create a `config.ts` file and enter your API key in it (as per `config.example.ts`).

```
npm install
npm test
```

## License

[MIT](https://github.com/zygos/mailerlite-v2-node/blob/master/LICENSE)
