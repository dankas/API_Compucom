import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'mysql', table: 'user'}}})
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 60,
    mysql: {columnName: 'Host', dataType: 'char', dataLength: 60, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  host: string;

  @property({
    type: 'string',
    required: true,
    length: 80,
    mysql: {columnName: 'User', dataType: 'char', dataLength: 80, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  user: string;

  @property({
    type: 'string',
    length: 4294967295,
    mysql: {columnName: 'Password', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  password?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Select_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  selectPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Insert_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  insertPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Update_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  updatePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Delete_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  deletePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Create_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Drop_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  dropPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Reload_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  reloadPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Shutdown_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  shutdownPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Process_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  processPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'File_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  filePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Grant_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  grantPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'References_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  referencesPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Index_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  indexPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Alter_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  alterPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Show_db_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  showDbPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Super_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  superPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Create_tmp_table_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createTmpTablePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Lock_tables_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lockTablesPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Execute_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  executePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Repl_slave_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  replSlavePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Repl_client_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  replClientPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Create_view_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createViewPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Show_view_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  showViewPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Create_routine_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createRoutinePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Alter_routine_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  alterRoutinePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Create_user_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createUserPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Event_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  eventPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Trigger_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  triggerPriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Create_tablespace_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  createTablespacePriv?: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'Delete_history_priv', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  deleteHistoryPriv?: string;

  @property({
    type: 'string',
    length: 9,
    mysql: {columnName: 'ssl_type', dataType: 'varchar', dataLength: 9, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  sslType?: string;

  @property({
    type: 'string',
    required: true,
    length: 4294967295,
    mysql: {columnName: 'ssl_cipher', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  sslCipher: string;

  @property({
    type: 'string',
    required: true,
    length: 4294967295,
    mysql: {columnName: 'x509_issuer', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  x509Issuer: string;

  @property({
    type: 'string',
    required: true,
    length: 4294967295,
    mysql: {columnName: 'x509_subject', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  x509Subject: string;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'max_questions', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  maxQuestions: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'max_updates', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  maxUpdates: number;

  @property({
    type: 'number',
    required: true,
    precision: 20,
    scale: 0,
    mysql: {columnName: 'max_connections', dataType: 'bigint', dataLength: null, dataPrecision: 20, dataScale: 0, nullable: 'N'},
  })
  maxConnections: number;

  @property({
    type: 'number',
    required: true,
    precision: 19,
    scale: 0,
    mysql: {columnName: 'max_user_connections', dataType: 'bigint', dataLength: null, dataPrecision: 19, dataScale: 0, nullable: 'N'},
  })
  maxUserConnections: number;

  @property({
    type: 'string',
    required: true,
    length: 4294967295,
    mysql: {columnName: 'plugin', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  plugin: string;

  @property({
    type: 'string',
    required: true,
    length: 4294967295,
    mysql: {columnName: 'authentication_string', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  authenticationString: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    mysql: {columnName: 'password_expired', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  passwordExpired: string;

  @property({
    type: 'string',
    length: 1,
    mysql: {columnName: 'is_role', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  isRole?: string;

  @property({
    type: 'string',
    required: true,
    length: 4294967295,
    mysql: {columnName: 'default_role', dataType: 'longtext', dataLength: 4294967295, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  defaultRole: string;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    scale: 6,
    mysql: {columnName: 'max_statement_time', dataType: 'decimal', dataLength: null, dataPrecision: 12, dataScale: 6, nullable: 'N'},
  })
  maxStatementTime: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
