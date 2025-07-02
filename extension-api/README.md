[TOC]

# Introduction

Provides Typescript type definitions for the API exposed by [Oracle SQL Developer Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=Oracle.sql-developer).

`Oracle SQL Developer Extension for VSCode` provides the ability to manage database connections, execute SQL queries and scripts, perform PL/SQL development, and interact with database objects. The API enables developers to interact with these features programmatically, allowing them to create customized experiences on top of `Oracle SQL Developer Extension for VSCode`.

# Getting Started

## Prerequisites

### Install `Oracle SQL Developer Extension for VSCode`

If you haven't already, install `Oracle SQL Developer Extension for VSCode` using the following [link](https://marketplace.visualstudio.com/items?itemName=Oracle.sql-developer).

**Note:** The extension supports VSCode >=1.97.0, so make sure your VSCode version is at least 1.97.

### Install Typescript:

NPM
```sh
npm install --save-dev typescript
```

YARN
```sh
yarn add --dev typescript
```

### Install Type definitions for VSCode

NPM
```sh
npm install --save-dev @types/vscode
```

YARN
```sh
yarn add --dev @types/vscode
```

## Installation

NPM
```sh
npm install --save-dev @oracle/sql-developer-api
```

YARN
```sh
yarn add --dev @oracle/sql-developer-api
```

# Usage
The following code sample illustrates how to retrieve an API instance and use it:

```ts
const extensionId = 'Oracle.sql-developer';
const extension = vscode.extensions.getExtension<Api>(extensionId);
if (!extension) {
    throw new Error(`Extension ${extensionId} is either not installed or disabled`);
}

const api = extension.exports;
```


## Connections

The API exposes a `Connections` interface, allowing access to connections and connection sessions. For instance, the following snippet allows retrieving the first connection in the connections list, connecting to it and executing a script against the session:
```ts
const connections = api.connections().list();
const session = await connections[0].connect();
const resultSet = await session.executeQuery({ sql: 'SELECT * FROM dual;' });
```
The following table lists all available connection and connection session methods:

<table>

  <tr>
    <th></th>
    <th>Name</th>
    <th>Description</th>
  </tr>

  <tr>
    <td rowspan="2">Connections</td>
    <td>list</td>
    <td>Allows listing all stored connections</td>
  </tr>
  <tr>
    <td>onDidChangeConnectionStatus</td>
    <td>Listen to changes to connections status e.g. connecting, disconnecting, ..etc.</td>
  </tr>

  <tr>
    <td rowspan="3">Connection</td>
    <td>connect</td>
    <td>Connects to the connection and returns a connection session.</td>
  </tr>
  <tr>
    <td>reconnect</td>
    <td>Reconnects the connection if it's alive and returns the a new connection session.</td>
  </tr>
  <tr>
    <td>disconnect</td>
    <td>Disconnects the connection if it's alive.</td>
  </tr>

  <tr>
    <td rowspan="2">Connection Session</td>
    <td>executeQuery</td>
    <td>Executes a DQL query and returns a ResultSet object.</td>
  </tr>
  <tr>
    <td>execute</td>
    <td>Executes the given SQL script and returns a result in the specified format.</td>
  </tr>

</table>

## Worksheets

The API also exposes a `Worksheets` interface, that provides access to SQL worksheets. The following snippets illustrates how this interface can be leveraged to retrieve the content of the active worksheet and executes it against the attached session:
```ts
const activeWorksheet = api.worksheets().activeWorksheet;
const content = activeWorksheet.editor.document.getText();
const resultSet = await activeWorksheet.session.executeQuery({ sql: content });
```
The following table lists all available worksheets methods:

<table>

  <tr>
    <th></th>
    <th>Name</th>
    <th>Description</th>
  </tr>

  <tr>
    <td rowspan="8">Worksheets</td>
    <td>activeWorksheet</td>
    <td>Holds the currently active worksheet, or undefined if there is no active worksheet.</td>
  </tr>
  <tr>
    <td>visibleWorksheets</td>
    <td>Holds a list of all open worksheets.</td>
  </tr>
  <tr>
    <td>onDidChangeActiveWorksheet</td>
    <td>Registers a listener that fires whenever the `activeWorksheet` changes.</td>
  </tr>
  <tr>
    <td>onDidOpenWorksheet</td>
    <td>Registers a listener that fires whenever a new worksheet opens.</td>
  </tr>
  <tr>
    <td>onDidCloseWorksheet</td>
    <td>Registers a listener that fires whenever a worksheet closes.</td>
  </tr>
  <tr>
    <td>onWillExecuteCommand</td>
    <td>Registers a listener that fires whenever a worksheet command is about to be executed e.g. running a statement.</td>
  </tr>
  <tr>
    <td>onDidExecuteCommand</td>
    <td>Registers a listener that fires whenever a worksheet command has been executed running a script.</td>
  </tr>
  <tr>
    <td>registerCommand</td>
    <td>Registers a command that can be executed from within a worksheet e.g. from the toolbar.</td>
  </tr>


</table>

Consult [the code samples](https://github.com/oracle/sql-developer-vscode/tree/main/samples) for more examples and code snippets on how to use different parts of the API.

<!-- # Changelog: skipped for first release, will be used starting from next release -->

## Contributing

Please review our [contribution guide](https://github.com/oracle/sql-developer-vscode/blob/main/CONTRIBUTING.md)

# License

Copyright (c) 2025 Oracle and/or its affiliates.

Released under the Universal Permissive License v1.0 as shown at <https://oss.oracle.com/licenses/upl/>.