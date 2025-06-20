# Contributing to this repository

Thank you for your interest in contributing to this repository—your efforts are highly appreciated. This document should provide you with everything you need to get started.

## Contributing code

Before submitting code via a pull request,
you will need to have signed the [Oracle Contributor Agreement][OCA] (OCA) and
your commits need to include the following line using the name and e-mail
address you used to sign the OCA:

```text
Signed-off-by: Your Name <you@example.org>
```

This can be automatically added to pull requests by committing with `--sign-off`
or `-s`, e.g.

```text
git commit --signoff
```

Only pull requests from committers that can be verified as having signed the OCA
can be accepted.

## Asking Questions

If you have questions regarding the extension or its API, we highly recommend posting them in the [QA][qa-link] section under the extension's home page in the marketplace.

## Opening issues

For bugs or enhancement requests, please file a GitHub issue unless it's
security related. When filing a bug remember that the better written the bug is,
the more likely it is to be fixed, the [How to file an issue](#how-to-file-an-issue) section provides guidelines to follow when filing issues. If you think you've found a security
vulnerability, do not raise a GitHub issue and follow the instructions in our [security policy](./SECURITY.md).

### How to file an issue

#### Bugs

- First make sure the issue has not been reported before, by searching in [open issues][issues-link].
- Provide a detailed report that includes:
   - A brief summary describing the bug.
   - Steps to reproduce, along with any sample data, logs, ...etc.
   - Current versus expected behavior.
   - Extension version that has the defect e.g. 25.1.0.
   - OS environment in which the extension was being used e.g. Windows.
   - Any other information you want to share that is relevant to the issue being reported.

#### Feature requests

Feature and enhancement requests are welcomed, before you file one, take time to gather enough information that justify the request. Examples of the information we look for include:
- Motivation: document why do you think the feature/enhancement is needed, how will it be useful to users, ...etc.
- Scope & goals: describe the scope and goals of the feature, and how does it align with our product's scope and goals.

 If you'd like more specific guidelines, see the [Contributor Covenant Code of Conduct][cccc-link].
## Code of conduct

Follow the [Golden Rule](https://en.wikipedia.org/wiki/Golden_Rule). If you'd like more specific guidelines, see the [Contributor Covenant Code of Conduct][cccc-link].

<!-- Links -->
[issues-link]: https://github.com/oracle-samples/sql-developer-vscode/issues
[qa-link]: https://marketplace.visualstudio.com/items?itemName=Oracle.sql-developer&ssr=false#qna
[golden-rule-link]: https://en.wikipedia.org/wiki/Golden_Rule
[cccc-link]: https://www.contributor-covenant.org/version/1/4/code-of-conduct/
[OCA]: https://oca.opensource.oracle.com
