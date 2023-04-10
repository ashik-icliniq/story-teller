# Storybook Setup

npx sb init

Followed by this documentation. Storybook is installed.\
[Story Book Installation](https://storybook.js.org/docs/react/get-started/install "Story Book Installation")

## Problems faced while installation and running storybook

*Missing Modules @testing-library/react while build*

**Fixation - Manually installing testing-library/react**
> npm i -D @testing-library/react@12.1.2


# Storybook Test-runner Setup

Followed by this documentation. Storybook test-runner is installed.
[Story Book Test-runner](https://storybook.js.org/docs/react/writing-tests/test-runner#page-top "Story Book Test-runner")

## Problems faced while initiating test-runner

*TypeError: Jest: Got error running globalSetup*

**Fixation - Downgrading storybook test-runner to specific version**
> npm i @storybook/test-runner@0.6.2

# Configure Jest
>  npm i @storybook/jest

### Common Issues Identified

------------

1. Storybook Build Failed\
`this[kHandle] = new _Hash(algorithm, xofLen); ^Error: envelope routines::unsupported`\
Refer this document for solution - [Click here](https://onlinessolution.blogspot.com/2021/11/error-error0308010cdigital-envelope.html "Click here")
