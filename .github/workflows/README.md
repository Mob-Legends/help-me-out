# Github Action Workflows for 'Help Me Out'

## Pull Requests

| When will it run?                                                              | What does it do?  |
| ------------------------------------------------------------------------------ | ----------------- |
| When a PR is created or updated, e.g. via a commit being pushed to the branch. | It will run eslint, then execute the tests - using various Node versions as the environment it will be deployed to is, as yet, unknown. |

## Push

| When will it run?                                                                 | What does it do?  |
| --------------------------------------------------------------------------------- | ----------------- |
| Whenever someone pushes to the repository and the yarn.lock file has been changed | It will build the node modules cache for the new Yarn.lock, which in turn _should_ increase the speed of the PR test runner in most cases |

## Todo

* [ ] Once a cloud service provider has been decided then a deployment workflow can be written.
