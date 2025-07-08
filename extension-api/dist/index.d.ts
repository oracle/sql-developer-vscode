/*
 * Copyright (c) 2025, Oracle and/or its affiliates. All rights reserved.
 *
 * The Universal Permissive License (UPL), Version 1.0
 *
 * Subject to the condition set forth below, permission is hereby granted to any
 * person obtaining a copy of this software, associated documentation and/or
 * data (collectively the "Software"), free of charge and under any and all
 * copyright rights in the Software, and any and all patent rights owned or
 * freely licensable by each licensor hereunder covering either (i) the
 * unmodified Software as contributed to or provided by such licensor, or (ii)
 * the Larger Works (as defined below), to deal in both
 *
 * (a) the Software, and
 *
 * (b) any piece of software and/or hardware listed in the lrgrwrks.txt file if
 * one is included with the Software each a "Larger Work" to which the Software
 * is contributed by such licensors),
 *
 * without restriction, including without limitation the rights to copy, create
 * derivative works of, display, perform, and distribute the Software and make,
 * use, sell, offer for sale, import, export, have made, and have sold the
 * Software and the Larger Work(s), and to sublicense the foregoing rights on
 * either these or other terms.
 *
 * This license is subject to the following condition:
 *
 * The above copyright notice and either this complete permission notice or at a
 * minimum a reference to the UPL must be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Readable } from 'node:stream';
import { Disposable as Disposable$1, Event as Event$1, TextEditor } from 'vscode';

export const enum BindDataType {
	CHAR = "CHAR",
	NCHAR = "NCHAR",
	NVARCHAR2 = "NVARCHAR2",
	DATE = "DATE",
	VARCHAR2 = "VARCHAR2",
	NUMBER = "NUMBER",
	FLOAT = "FLOAT",
	LONG = "LONG",
	BINARY_FLOAT = "BINARY_FLOAT",
	BINARY_DOUBLE = "BINARY_DOUBLE",
	TIMESTAMP = "TIMESTAMP",
	TIMESTAMP_WITH_TIME_ZONE = "TIMESTAMP_WITH_TIME_ZONE",
	TIMESTAMP_WITH_LOCAL_TIME_ZONE = "TIMESTAMP_WITH_LOCAL_TIME_ZONE",
	INTERVAL_YEAR_TO_MONTH = "INTERVAL_YEAR_TO_MONTH",
	INTERVALYM = "INTERVALYM",
	INTERVAL_DAY_TO_SECOND = "INTERVAL_DAY_TO_SECOND",
	INTERVALDS = "INTERVALDS",
	RAW = "RAW",
	REFCURSOR = "REFCURSOR",
	SYS_REFCURSOR = "SYS_REFCURSOR",
	LONG_RAW = "LONG_RAW",
	ROWID = "ROWID",
	UROWID = "UROWID",
	CLOB = "CLOB",
	NCLOB = "NCLOB",
	BLOB = "BLOB",
	BFILE = "BFILE",
	JSON = "JSON",
	XML = "XML"
}
export const enum BindMode {
	IN = "IN",
	OUT = "OUT",
	INOUT = "INOUT",
	UNKNOWN = "UNKNOWN",
	RETURNING = "RETURNING"
}
export type BindVariable = {
	name: string;
	value: string;
	dataType: BindDataType;
	mode?: BindMode;
};
export type Position = {
	/**
	 * Line position in a document (zero-based).
	 */
	line: number;
	/**
	 * Character offset on a line in a document (zero-based).
	 * If the character value is greater than the line length it defaults back to the line length.
	 *
	 */
	character: number;
};
type Range$1 = {
	start: Position;
	end: Position;
};
export const enum SqlStatementType {
	QUERY = "query",
	OTHER = "other",
	IGNORE = "ignore",
	PLSQL = "plsql",
	SQLPLUS = "sqlplus",
	DML = "dml",
	TRANSACTION_CONTROL = "transaction-control",
	SESSION_CONTROL = "session-control",
	SYSTEM_CONTROL = "system-control",
	DDL = "ddl",
	JDBC = "jdbc"
}
export const enum EchoMode {
	NORMAL = "NORMAL",
	HIDDEN = "HIDDEN"
}
export const enum SubstitutionKind {
	PROMPT_ALWAYS = "PROMPT_ALWAYS",
	PROMPT_FIRST = "PROMPT_FIRST",
	ACCEPT = "ACCEPT",
	DEFINED = "DEFINED"
}
export type Substitution = {
	/**
	 * The substitution variable name
	 */
	name: string;
	/**
	 * The type of substitution prompt
	 */
	kind: SubstitutionKind;
	/**
	 * The textual range that the substitution replaces
	 */
	range?: Range$1;
	/**
	 * The data type the value MUST conform to
	 */
	dataType?: string;
	/**
	 * The format the value MUST conform to
	 */
	format?: string;
	/**
	 * The default value to show in the prompt
	 */
	defaultValue?: string;
	/**
	 * The end user facing prompt
	 */
	prompt?: string;
	/**
	 * Indicate if the entered value should be displayed
	 */
	echoMode?: EchoMode;
	/**
	 * The value assigned to the substitution. Only provided for `Kind.DEFINED`
	 */
	value?: string;
};
export type SqlPrepareResponse = {
	statementType?: SqlStatementType;
	/**
	 * The text of the SQL statement
	 */
	statementText?: string;
	/**
	 * The SQL_ID for SQL queries. Present when `statementType == query`
	 */
	statementSqlId?: string;
	/**
	 * The range of the selected statement or null if not found or not requested
	 */
	statementRange?: Range$1;
	/**
	 * The set of substitution prompts that need to be completed by the user before the script can be executed
	 */
	substitutions?: Array<Substitution>;
	/**
	 * Bound parameters for SQL Statement
	 */
	binds?: Array<BindVariable>;
};
export type Link = {
	/**
	 * The link target
	 */
	href: string;
};
export type Hyperlink = (Link & {
	/**
	 * The link target
	 */
	href: string;
	/**
	 * The link relation
	 */
	rel?: string;
	/**
	 * Human readable identifier of the link
	 */
	title?: string;
	/**
	 * Content-Type of the link target
	 */
	type?: string;
});
export type SqlResultSetMetadata = {
	/**
	 * The name of the result set column
	 */
	columnName?: string;
	/**
	 * The postfixed name for duplicated columns
	 */
	jsonColumnName?: string;
	/**
	 * The data type of the result set column
	 */
	columnTypeName?: string;
	/**
	 * The number of digits in a numeric data type
	 */
	precision?: number;
	/**
	 * The number of digits to the right of the decimal point in a numeric data type
	 */
	scale?: number;
	/**
	 * True if the column may contain null values, false otherwise
	 */
	isNullable?: boolean;
};
export type SqlResultSetRow = Record<string, any>;
export type SqlResultSet = {
	metadata?: Array<SqlResultSetMetadata>;
	items?: Array<SqlResultSetRow>;
	/**
	 * If true indicates this resource is paginated
	 */
	hasMore?: boolean;
	/**
	 * The zero based absolute index of the first row in this page of the result set
	 */
	offset?: number;
	/**
	 * The maximum number of rows in this page of the result set
	 */
	limit?: number;
	/**
	 * The actual number of rows in this page of the result set
	 */
	count?: number;
	/**
	 * Pagination hyperlinks
	 */
	links?: Array<Hyperlink>;
};
export type SqlScriptError = {
	/**
	 * The a unique identifier for the error condition
	 */
	errorCode: string;
	/**
	 * Summary of the error condition
	 */
	message: string;
	/**
	 * Desribes what caused the error condition
	 */
	cause?: string;
	/**
	 * Describes how to remediate the error
	 */
	action?: string;
	/**
	 * Index of the line in the SQL statement that caused the error
	 */
	line?: number;
	/**
	 * Index of the column in the lien that caused the error
	 */
	column?: number;
};
export type SqlStatementResponse = {
	/**
	 * The index of the statement in the script
	 */
	statementId?: number;
	statementType?: SqlStatementType;
	statementPos?: {
		/**
		 * Index of the start of the statement in the script
		 */
		startLine?: number;
		/**
		 * Index of the end of the statement in the script
		 */
		endLine?: number;
	};
	/**
	 * The text of the SQL statement
	 */
	statementText?: string;
	/**
	 * The SQL_ID for SQL queries. Present when `statementType == query`
	 */
	statementSqlId?: string;
	resultSet?: SqlResultSet;
	/**
	 * The text output generated as a result of executing the statement
	 */
	response?: Array<string>;
	/**
	 * The parameters that were bound to the statement
	 */
	binds?: Array<BindVariable>;
	error?: SqlScriptError;
	/**
	 * The database SQL error code
	 */
	errorCode?: number;
	/**
	 * The line number of the statement that caused the error. Deprecated, use error.line instead
	 */
	errorLine?: number;
	/**
	 * The column number of the error in the statement. Deprecated, use error.column instead
	 */
	errorColumn?: number;
	/**
	 * A summary of the database error message. Deprecated, use error.message instead
	 */
	errorMessage?: string;
	/**
	 * A detailed description of the error condition. Deprecated, use error.cause instead
	 */
	errorDetails?: string;
	/**
	 * The number of rows affected by the statement
	 */
	result?: number;
};
export type SqlScriptResponse = {
	env?: {
		defaultTimeZone?: string;
	};
	/**
	 * Results for each statement in the script
	 */
	items?: Array<SqlStatementResponse>;
	/**
	 * If true indicates this resource is paginated
	 */
	hasMore?: boolean;
	/**
	 * Pagination hyperlinks
	 */
	links?: Array<Hyperlink>;
};
/**
 * Interface for dealing with connections, provides convenient methods
 * e.g. listing available connections, listening to events on connections.
 */
export interface Connections {
	/**
	 * List all the connections known to the extension.
	 */
	list(): Connection[];
	/**
	 * An {@link Event} that fires when a connection status has changed e.g. a connection was created.
	 */
	onDidChangeConnectionStatus: Event$1<ConnectionStatusChangeEventData>;
}
/**
 * Represents a connection definition
 */
export interface Connection {
	/**
	 * A unique identifier for the connection.
	 */
	id: string;
	/**
	 * The name of the connection.
	 */
	name: string;
	/**
	 * The session associated with the connection.
	 */
	session: ConnectionSession | undefined;
	/**
	 * True if the connection has an active session, false otherwise.
	 */
	isConnected: boolean;
	/**
	 * Initiates a connection to the database, and returns a connection session.
	 */
	connect(): Promise<ConnectionSession>;
	/**
	 * Disconnects the connection to the database if it's active, and destroys the associated session.
	 */
	disconnect(): Promise<boolean>;
	/**
	 * Reconnects the connection to the database if it's lost, and recreates the associated session.
	 */
	reconnect(): Promise<ConnectionSession>;
}
export interface ConnectionSession {
	status: SessionStatus;
	/**
	 * Executes a single DQL query and returns a result set object.
	 * @param query the query to execute, including binds.
	 * @param options optional options to control the behavior of query execution.
	 */
	executeQuery(query: SqlQuery, options?: QueryExecutionOptions): Promise<ResultSet>;
	/**
	 * Executes a SQL script and returns the results in the specified format.
	 * @param script the SQL script to execute.
	 * @param options options to control the behavior of the script execution.
	 */
	execute(script: SqlScript, options?: ScriptExecutionJsonOptions): Promise<SqlScriptResponse>;
	execute(script: SqlScript, options?: ScriptExecutionTextOptions): Promise<string>;
	execute(script: SqlScript, options?: ScriptExecutionBinaryOptions): Promise<Readable>;
	/**
	 * Prepares the SQL to execute by analyzing the given sql script
	 * and extracts the range based on the cursor position, and any bound
	 * binds or substitutions
	 * @param sql The SQL text to analyze
	 * @param position Optional cursor position to determine which statement to prepare
	 * @returns A promise that resolves to a SqlPrepareResponse containing statement info and variables
	 */
	prepareSql(sql: string, position?: {
		line: number;
		character: number;
	}): Promise<SqlPrepareResponse>;
}
export type QueryExecutionOptions = {
	/**
	 * Controls how many rows are returned per page when performing pagination.
	 */
	pageSize?: number;
};
export interface ScriptExecutionOptions {
	responseFormat: "json" | "text" | "binary";
	pageSize?: number;
}
export interface ScriptExecutionTextOptions {
	responseFormat: "text";
}
export interface ScriptExecutionBinaryOptions {
	responseFormat: "binary";
}
export interface ScriptExecutionJsonOptions {
	responseFormat: "json";
	pageSize?: number;
}
export type ConnectionStatusChangeEventData = {
	connection: Connection;
	status: Exclude<ConnectionStatus, "renamed">;
} | {
	connection: Connection;
	status: "renamed";
	oldName: string;
	newName: string;
} | {
	connection: Connection;
	status: "updated";
	oldName?: string;
	newName?: string;
};
export type ConnectionStatus = "added" | "removed" | "updated" | "opened" | "closed" | "renamed" | "reconnected" | "cloned";
export type SessionStatus = "connected" | "disconnected";
export interface ResultSet {
	query(): SqlQuery;
	rows(): {
		[key: string]: any;
	}[];
	metadata(): {
		[key: string]: any;
	}[];
	hasNext(): boolean;
	next(): Promise<{
		[key: string]: any;
	}[] | undefined>;
	close(): Promise<void>;
}
export type SqlQuery = {
	sql: string;
	binds?: BindVariable[];
};
export type SqlScript = SqlQuery;
/**
 * Interface for dealing with worksheets, provides convenient methods
 * e.g. listing available connections, listening to events on connections.
 */
export interface Worksheets {
	/**
	 * The currently active editor or `undefined`. The active editor is the one
	 * that currently has focus or, when none has focus, the one that has changed
	 * input most recently.
	 */
	activeWorksheet: Worksheet | undefined;
	/**
	 * Returns a list of the worksheets that are currently open.
	 */
	visibleWorksheets: Worksheet[];
	/**
	 * An {@link Event} which fires when the {@link Worksheets.activeWorksheet active worksheet} has changed.
	 */
	onDidChangeActiveWorksheet: Event$1<Worksheet | undefined>;
	/**
	 * An {@link Event} which fires when a worksheet has closed.
	 */
	onDidCloseWorksheet: Event$1<Worksheet>;
	/**
	 * An {@link Event} which fires when a worksheet has opened.
	 */
	onDidOpenWorksheet: Event$1<Worksheet>;
	/**
	 * An {@link Event} which fires right before a worksheet command start executing.
	 */
	onWillExecuteCommand: Event$1<{
		worksheet: Worksheet;
		commandId: string;
	}>;
	/**
	 * An {@link Event} which fires after a worksheet command has executed.
	 * @note this event will fire regardless of the outcome of the command execution.
	 */
	onDidExecuteCommand: Event$1<{
		worksheet: Worksheet;
		commandId: string;
		result: {
			data: any;
			error: null;
		} | {
			data: null;
			error: Error;
		};
	}>;
	/**
	 * Registers a command that can be invoked via a toolbar button, keyboard shortcut,
	 * a menu item, an action, or directly.
	 * @param command A unique identifier for the command.
	 * @param callback A callback to execute when the command is invoked.
	 * @returns Disposable which unregister the command on disposal.
	 * @note The command will need to be defined in package.json first, and to limit
	 * its scope to worksheets the when clause should be set to `sqldeveloper.activeEditorType == sqlWorksheet`.
	 */
	registerCommand(commandId: string, callback: (worksheet: Worksheet) => void): Disposable$1;
}
export interface Worksheet {
	editor: TextEditor;
	session: ConnectionSession | undefined;
	/**
	 * Attaches the worksheet to a connection session.
	 * @returns A promise that resolves when the worksheet is attached.
	 */
	attach(): Promise<ConnectionSession | undefined>;
}
export type WorksheetCommand = "runStatement" | "runScript" | "attach" | "detach" | "explainPlan";
export interface Api {
	/**
	 * Api for dealing with connections, provides convenient methods
	 * e.g. listing available connections, executing scripts, listening to events.
	 * @since 25.1.0
	 */
	connections(): Connections;
	/**
	 * Api for dealing with worksheets, provides convenient methods
	 * e.g. listing active and open worksheets, registering commands, listening to events.
	 * @since 25.1.0
	 */
	worksheets(): Worksheets;
}

export {};
