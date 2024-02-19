# Email Audit

Email Audit is a system used to audit all emails sent from within an organization. In the event of security incidents (such as leakage of sensitive information via emails), this system will be used by the organization's auditing department to retrieve and verify the emails of the concerning parties through its admin console.

## Development

Install dependencies and then start in the development mode.

```bash
npm install
npm run dev
```

Navigate to the port that was displayed on the terminal. The app should be running after the development build is finished.

## Build

To generate production version:

```bash
npm run build
```

You can run the newly built app locally with `npm run preview`.

## Features

This project is in an early phase, so the features are not yet complete. At the moment, it will display mocked email data from `fake-data.ts` to simulate an API response. It also doesn't have any kind of pagination at the moment, but we plan to support it in the future, as well as allowing the user to set how many items to show per page.

Since checking date and time is crucial in an auditing process, table rows have alternating background colors between dates to make it easier to distinguish emails sent on different dates.

Our users are diverse and have many different device configurations, so we need to make sure the UI doesn't break when viewed at any screen size. However, since we haven't implemented a mobile version of the design yet, we understand that the information cannot be consumed well on very small screen sizes.
