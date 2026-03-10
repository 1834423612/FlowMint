
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuthIdentity
 * 
 */
export type AuthIdentity = $Result.DefaultSelection<Prisma.$AuthIdentityPayload>
/**
 * Model ProviderAccount
 * 
 */
export type ProviderAccount = $Result.DefaultSelection<Prisma.$ProviderAccountPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model WorkflowVersion
 * 
 */
export type WorkflowVersion = $Result.DefaultSelection<Prisma.$WorkflowVersionPayload>
/**
 * Model WorkflowRun
 * 
 */
export type WorkflowRun = $Result.DefaultSelection<Prisma.$WorkflowRunPayload>
/**
 * Model WorkflowRunStep
 * 
 */
export type WorkflowRunStep = $Result.DefaultSelection<Prisma.$WorkflowRunStepPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model EnvironmentProfile
 * 
 */
export type EnvironmentProfile = $Result.DefaultSelection<Prisma.$EnvironmentProfilePayload>
/**
 * Model ReviewNote
 * 
 */
export type ReviewNote = $Result.DefaultSelection<Prisma.$ReviewNotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkflowStatus: {
  draft: 'draft',
  active: 'active',
  paused: 'paused',
  archived: 'archived'
};

export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus]


export const WorkflowRunStatus: {
  queued: 'queued',
  running: 'running',
  success: 'success',
  failed: 'failed',
  cancelled: 'cancelled'
};

export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus]


export const ProviderType: {
  openai: 'openai',
  anthropic: 'anthropic',
  openrouter: 'openrouter',
  azure: 'azure',
  deepseek: 'deepseek',
  ollama: 'ollama',
  custom: 'custom'
};

export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType]


export const ProviderProtocol: {
  openai_compatible: 'openai_compatible',
  anthropic_compatible: 'anthropic_compatible'
};

export type ProviderProtocol = (typeof ProviderProtocol)[keyof typeof ProviderProtocol]


export const AssetType: {
  screenshot: 'screenshot',
  artifact: 'artifact'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]

}

export type WorkflowStatus = $Enums.WorkflowStatus

export const WorkflowStatus: typeof $Enums.WorkflowStatus

export type WorkflowRunStatus = $Enums.WorkflowRunStatus

export const WorkflowRunStatus: typeof $Enums.WorkflowRunStatus

export type ProviderType = $Enums.ProviderType

export const ProviderType: typeof $Enums.ProviderType

export type ProviderProtocol = $Enums.ProviderProtocol

export const ProviderProtocol: typeof $Enums.ProviderProtocol

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authIdentity`: Exposes CRUD operations for the **AuthIdentity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthIdentities
    * const authIdentities = await prisma.authIdentity.findMany()
    * ```
    */
  get authIdentity(): Prisma.AuthIdentityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerAccount`: Exposes CRUD operations for the **ProviderAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderAccounts
    * const providerAccounts = await prisma.providerAccount.findMany()
    * ```
    */
  get providerAccount(): Prisma.ProviderAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowVersion`: Exposes CRUD operations for the **WorkflowVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowVersions
    * const workflowVersions = await prisma.workflowVersion.findMany()
    * ```
    */
  get workflowVersion(): Prisma.WorkflowVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowRun`: Exposes CRUD operations for the **WorkflowRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowRuns
    * const workflowRuns = await prisma.workflowRun.findMany()
    * ```
    */
  get workflowRun(): Prisma.WorkflowRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowRunStep`: Exposes CRUD operations for the **WorkflowRunStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowRunSteps
    * const workflowRunSteps = await prisma.workflowRunStep.findMany()
    * ```
    */
  get workflowRunStep(): Prisma.WorkflowRunStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmentProfile`: Exposes CRUD operations for the **EnvironmentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentProfiles
    * const environmentProfiles = await prisma.environmentProfile.findMany()
    * ```
    */
  get environmentProfile(): Prisma.EnvironmentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewNote`: Exposes CRUD operations for the **ReviewNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewNotes
    * const reviewNotes = await prisma.reviewNote.findMany()
    * ```
    */
  get reviewNote(): Prisma.ReviewNoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AuthIdentity: 'AuthIdentity',
    ProviderAccount: 'ProviderAccount',
    Workflow: 'Workflow',
    WorkflowVersion: 'WorkflowVersion',
    WorkflowRun: 'WorkflowRun',
    WorkflowRunStep: 'WorkflowRunStep',
    Asset: 'Asset',
    EnvironmentProfile: 'EnvironmentProfile',
    ReviewNote: 'ReviewNote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "authIdentity" | "providerAccount" | "workflow" | "workflowVersion" | "workflowRun" | "workflowRunStep" | "asset" | "environmentProfile" | "reviewNote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuthIdentity: {
        payload: Prisma.$AuthIdentityPayload<ExtArgs>
        fields: Prisma.AuthIdentityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthIdentityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthIdentityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload>
          }
          findFirst: {
            args: Prisma.AuthIdentityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthIdentityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload>
          }
          findMany: {
            args: Prisma.AuthIdentityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload>[]
          }
          create: {
            args: Prisma.AuthIdentityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload>
          }
          createMany: {
            args: Prisma.AuthIdentityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuthIdentityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload>
          }
          update: {
            args: Prisma.AuthIdentityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload>
          }
          deleteMany: {
            args: Prisma.AuthIdentityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthIdentityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthIdentityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthIdentityPayload>
          }
          aggregate: {
            args: Prisma.AuthIdentityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthIdentity>
          }
          groupBy: {
            args: Prisma.AuthIdentityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthIdentityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthIdentityCountArgs<ExtArgs>
            result: $Utils.Optional<AuthIdentityCountAggregateOutputType> | number
          }
        }
      }
      ProviderAccount: {
        payload: Prisma.$ProviderAccountPayload<ExtArgs>
        fields: Prisma.ProviderAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload>
          }
          findFirst: {
            args: Prisma.ProviderAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload>
          }
          findMany: {
            args: Prisma.ProviderAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload>[]
          }
          create: {
            args: Prisma.ProviderAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload>
          }
          createMany: {
            args: Prisma.ProviderAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProviderAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload>
          }
          update: {
            args: Prisma.ProviderAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload>
          }
          deleteMany: {
            args: Prisma.ProviderAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProviderAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAccountPayload>
          }
          aggregate: {
            args: Prisma.ProviderAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderAccount>
          }
          groupBy: {
            args: Prisma.ProviderAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderAccountCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderAccountCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowVersion: {
        payload: Prisma.$WorkflowVersionPayload<ExtArgs>
        fields: Prisma.WorkflowVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          findFirst: {
            args: Prisma.WorkflowVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          findMany: {
            args: Prisma.WorkflowVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>[]
          }
          create: {
            args: Prisma.WorkflowVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          createMany: {
            args: Prisma.WorkflowVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkflowVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          update: {
            args: Prisma.WorkflowVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          aggregate: {
            args: Prisma.WorkflowVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowVersion>
          }
          groupBy: {
            args: Prisma.WorkflowVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowVersionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowVersionCountAggregateOutputType> | number
          }
        }
      }
      WorkflowRun: {
        payload: Prisma.$WorkflowRunPayload<ExtArgs>
        fields: Prisma.WorkflowRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          findFirst: {
            args: Prisma.WorkflowRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          findMany: {
            args: Prisma.WorkflowRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>[]
          }
          create: {
            args: Prisma.WorkflowRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          createMany: {
            args: Prisma.WorkflowRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkflowRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          update: {
            args: Prisma.WorkflowRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunPayload>
          }
          aggregate: {
            args: Prisma.WorkflowRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowRun>
          }
          groupBy: {
            args: Prisma.WorkflowRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowRunCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunCountAggregateOutputType> | number
          }
        }
      }
      WorkflowRunStep: {
        payload: Prisma.$WorkflowRunStepPayload<ExtArgs>
        fields: Prisma.WorkflowRunStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowRunStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowRunStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload>
          }
          findFirst: {
            args: Prisma.WorkflowRunStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowRunStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload>
          }
          findMany: {
            args: Prisma.WorkflowRunStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload>[]
          }
          create: {
            args: Prisma.WorkflowRunStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload>
          }
          createMany: {
            args: Prisma.WorkflowRunStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkflowRunStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload>
          }
          update: {
            args: Prisma.WorkflowRunStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowRunStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowRunStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowRunStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowRunStepPayload>
          }
          aggregate: {
            args: Prisma.WorkflowRunStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowRunStep>
          }
          groupBy: {
            args: Prisma.WorkflowRunStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowRunStepCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowRunStepCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentProfile: {
        payload: Prisma.$EnvironmentProfilePayload<ExtArgs>
        fields: Prisma.EnvironmentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload>
          }
          findFirst: {
            args: Prisma.EnvironmentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload>
          }
          findMany: {
            args: Prisma.EnvironmentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload>[]
          }
          create: {
            args: Prisma.EnvironmentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload>
          }
          createMany: {
            args: Prisma.EnvironmentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnvironmentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload>
          }
          update: {
            args: Prisma.EnvironmentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnvironmentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentProfilePayload>
          }
          aggregate: {
            args: Prisma.EnvironmentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentProfile>
          }
          groupBy: {
            args: Prisma.EnvironmentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentProfileCountAggregateOutputType> | number
          }
        }
      }
      ReviewNote: {
        payload: Prisma.$ReviewNotePayload<ExtArgs>
        fields: Prisma.ReviewNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          findFirst: {
            args: Prisma.ReviewNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          findMany: {
            args: Prisma.ReviewNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>[]
          }
          create: {
            args: Prisma.ReviewNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          createMany: {
            args: Prisma.ReviewNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          update: {
            args: Prisma.ReviewNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          deleteMany: {
            args: Prisma.ReviewNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          aggregate: {
            args: Prisma.ReviewNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewNote>
          }
          groupBy: {
            args: Prisma.ReviewNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewNoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    authIdentity?: AuthIdentityOmit
    providerAccount?: ProviderAccountOmit
    workflow?: WorkflowOmit
    workflowVersion?: WorkflowVersionOmit
    workflowRun?: WorkflowRunOmit
    workflowRunStep?: WorkflowRunStepOmit
    asset?: AssetOmit
    environmentProfile?: EnvironmentProfileOmit
    reviewNote?: ReviewNoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    authIdentities: number
    providerAccounts: number
    workflows: number
    workflowRuns: number
    environmentProfiles: number
    reviewNotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authIdentities?: boolean | UserCountOutputTypeCountAuthIdentitiesArgs
    providerAccounts?: boolean | UserCountOutputTypeCountProviderAccountsArgs
    workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
    workflowRuns?: boolean | UserCountOutputTypeCountWorkflowRunsArgs
    environmentProfiles?: boolean | UserCountOutputTypeCountEnvironmentProfilesArgs
    reviewNotes?: boolean | UserCountOutputTypeCountReviewNotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthIdentitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthIdentityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProviderAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnvironmentProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewNoteWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    versions: number
    runs: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | WorkflowCountOutputTypeCountVersionsArgs
    runs?: boolean | WorkflowCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowVersionWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunWhereInput
  }


  /**
   * Count Type WorkflowRunCountOutputType
   */

  export type WorkflowRunCountOutputType = {
    steps: number
    assets: number
  }

  export type WorkflowRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | WorkflowRunCountOutputTypeCountStepsArgs
    assets?: boolean | WorkflowRunCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowRunCountOutputType without action
   */
  export type WorkflowRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunCountOutputType
     */
    select?: WorkflowRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowRunCountOutputType without action
   */
  export type WorkflowRunCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunStepWhereInput
  }

  /**
   * WorkflowRunCountOutputType without action
   */
  export type WorkflowRunCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    displayName: string | null
    locale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    displayName: string | null
    locale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    displayName: number
    locale: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    locale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    locale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    displayName?: true
    locale?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    displayName: string | null
    locale: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    displayName?: boolean
    locale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authIdentities?: boolean | User$authIdentitiesArgs<ExtArgs>
    providerAccounts?: boolean | User$providerAccountsArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    workflowRuns?: boolean | User$workflowRunsArgs<ExtArgs>
    environmentProfiles?: boolean | User$environmentProfilesArgs<ExtArgs>
    reviewNotes?: boolean | User$reviewNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    displayName?: boolean
    locale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "displayName" | "locale" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authIdentities?: boolean | User$authIdentitiesArgs<ExtArgs>
    providerAccounts?: boolean | User$providerAccountsArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    workflowRuns?: boolean | User$workflowRunsArgs<ExtArgs>
    environmentProfiles?: boolean | User$environmentProfilesArgs<ExtArgs>
    reviewNotes?: boolean | User$reviewNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      authIdentities: Prisma.$AuthIdentityPayload<ExtArgs>[]
      providerAccounts: Prisma.$ProviderAccountPayload<ExtArgs>[]
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
      workflowRuns: Prisma.$WorkflowRunPayload<ExtArgs>[]
      environmentProfiles: Prisma.$EnvironmentProfilePayload<ExtArgs>[]
      reviewNotes: Prisma.$ReviewNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      displayName: string | null
      locale: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authIdentities<T extends User$authIdentitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$authIdentitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    providerAccounts<T extends User$providerAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$providerAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflows<T extends User$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflowRuns<T extends User$workflowRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    environmentProfiles<T extends User$environmentProfilesArgs<ExtArgs> = {}>(args?: Subset<T, User$environmentProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewNotes<T extends User$reviewNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly locale: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.authIdentities
   */
  export type User$authIdentitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    where?: AuthIdentityWhereInput
    orderBy?: AuthIdentityOrderByWithRelationInput | AuthIdentityOrderByWithRelationInput[]
    cursor?: AuthIdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthIdentityScalarFieldEnum | AuthIdentityScalarFieldEnum[]
  }

  /**
   * User.providerAccounts
   */
  export type User$providerAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    where?: ProviderAccountWhereInput
    orderBy?: ProviderAccountOrderByWithRelationInput | ProviderAccountOrderByWithRelationInput[]
    cursor?: ProviderAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderAccountScalarFieldEnum | ProviderAccountScalarFieldEnum[]
  }

  /**
   * User.workflows
   */
  export type User$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * User.workflowRuns
   */
  export type User$workflowRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    where?: WorkflowRunWhereInput
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    cursor?: WorkflowRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * User.environmentProfiles
   */
  export type User$environmentProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    where?: EnvironmentProfileWhereInput
    orderBy?: EnvironmentProfileOrderByWithRelationInput | EnvironmentProfileOrderByWithRelationInput[]
    cursor?: EnvironmentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentProfileScalarFieldEnum | EnvironmentProfileScalarFieldEnum[]
  }

  /**
   * User.reviewNotes
   */
  export type User$reviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    where?: ReviewNoteWhereInput
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    cursor?: ReviewNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuthIdentity
   */

  export type AggregateAuthIdentity = {
    _count: AuthIdentityCountAggregateOutputType | null
    _avg: AuthIdentityAvgAggregateOutputType | null
    _sum: AuthIdentitySumAggregateOutputType | null
    _min: AuthIdentityMinAggregateOutputType | null
    _max: AuthIdentityMaxAggregateOutputType | null
  }

  export type AuthIdentityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthIdentitySumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type AuthIdentityMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    provider: string | null
    providerUserId: string | null
    createdAt: Date | null
  }

  export type AuthIdentityMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    provider: string | null
    providerUserId: string | null
    createdAt: Date | null
  }

  export type AuthIdentityCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerUserId: number
    createdAt: number
    _all: number
  }


  export type AuthIdentityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthIdentitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthIdentityMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    createdAt?: true
  }

  export type AuthIdentityMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    createdAt?: true
  }

  export type AuthIdentityCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    createdAt?: true
    _all?: true
  }

  export type AuthIdentityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthIdentity to aggregate.
     */
    where?: AuthIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthIdentities to fetch.
     */
    orderBy?: AuthIdentityOrderByWithRelationInput | AuthIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthIdentities
    **/
    _count?: true | AuthIdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthIdentityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthIdentitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthIdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthIdentityMaxAggregateInputType
  }

  export type GetAuthIdentityAggregateType<T extends AuthIdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthIdentity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthIdentity[P]>
      : GetScalarType<T[P], AggregateAuthIdentity[P]>
  }




  export type AuthIdentityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthIdentityWhereInput
    orderBy?: AuthIdentityOrderByWithAggregationInput | AuthIdentityOrderByWithAggregationInput[]
    by: AuthIdentityScalarFieldEnum[] | AuthIdentityScalarFieldEnum
    having?: AuthIdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthIdentityCountAggregateInputType | true
    _avg?: AuthIdentityAvgAggregateInputType
    _sum?: AuthIdentitySumAggregateInputType
    _min?: AuthIdentityMinAggregateInputType
    _max?: AuthIdentityMaxAggregateInputType
  }

  export type AuthIdentityGroupByOutputType = {
    id: bigint
    userId: bigint
    provider: string
    providerUserId: string
    createdAt: Date
    _count: AuthIdentityCountAggregateOutputType | null
    _avg: AuthIdentityAvgAggregateOutputType | null
    _sum: AuthIdentitySumAggregateOutputType | null
    _min: AuthIdentityMinAggregateOutputType | null
    _max: AuthIdentityMaxAggregateOutputType | null
  }

  type GetAuthIdentityGroupByPayload<T extends AuthIdentityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthIdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthIdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthIdentityGroupByOutputType[P]>
            : GetScalarType<T[P], AuthIdentityGroupByOutputType[P]>
        }
      >
    >


  export type AuthIdentitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authIdentity"]>



  export type AuthIdentitySelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    createdAt?: boolean
  }

  export type AuthIdentityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerUserId" | "createdAt", ExtArgs["result"]["authIdentity"]>
  export type AuthIdentityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthIdentityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthIdentity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      provider: string
      providerUserId: string
      createdAt: Date
    }, ExtArgs["result"]["authIdentity"]>
    composites: {}
  }

  type AuthIdentityGetPayload<S extends boolean | null | undefined | AuthIdentityDefaultArgs> = $Result.GetResult<Prisma.$AuthIdentityPayload, S>

  type AuthIdentityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthIdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthIdentityCountAggregateInputType | true
    }

  export interface AuthIdentityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthIdentity'], meta: { name: 'AuthIdentity' } }
    /**
     * Find zero or one AuthIdentity that matches the filter.
     * @param {AuthIdentityFindUniqueArgs} args - Arguments to find a AuthIdentity
     * @example
     * // Get one AuthIdentity
     * const authIdentity = await prisma.authIdentity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthIdentityFindUniqueArgs>(args: SelectSubset<T, AuthIdentityFindUniqueArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthIdentity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthIdentityFindUniqueOrThrowArgs} args - Arguments to find a AuthIdentity
     * @example
     * // Get one AuthIdentity
     * const authIdentity = await prisma.authIdentity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthIdentityFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthIdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthIdentity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthIdentityFindFirstArgs} args - Arguments to find a AuthIdentity
     * @example
     * // Get one AuthIdentity
     * const authIdentity = await prisma.authIdentity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthIdentityFindFirstArgs>(args?: SelectSubset<T, AuthIdentityFindFirstArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthIdentity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthIdentityFindFirstOrThrowArgs} args - Arguments to find a AuthIdentity
     * @example
     * // Get one AuthIdentity
     * const authIdentity = await prisma.authIdentity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthIdentityFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthIdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthIdentities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthIdentityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthIdentities
     * const authIdentities = await prisma.authIdentity.findMany()
     * 
     * // Get first 10 AuthIdentities
     * const authIdentities = await prisma.authIdentity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authIdentityWithIdOnly = await prisma.authIdentity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthIdentityFindManyArgs>(args?: SelectSubset<T, AuthIdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthIdentity.
     * @param {AuthIdentityCreateArgs} args - Arguments to create a AuthIdentity.
     * @example
     * // Create one AuthIdentity
     * const AuthIdentity = await prisma.authIdentity.create({
     *   data: {
     *     // ... data to create a AuthIdentity
     *   }
     * })
     * 
     */
    create<T extends AuthIdentityCreateArgs>(args: SelectSubset<T, AuthIdentityCreateArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthIdentities.
     * @param {AuthIdentityCreateManyArgs} args - Arguments to create many AuthIdentities.
     * @example
     * // Create many AuthIdentities
     * const authIdentity = await prisma.authIdentity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthIdentityCreateManyArgs>(args?: SelectSubset<T, AuthIdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuthIdentity.
     * @param {AuthIdentityDeleteArgs} args - Arguments to delete one AuthIdentity.
     * @example
     * // Delete one AuthIdentity
     * const AuthIdentity = await prisma.authIdentity.delete({
     *   where: {
     *     // ... filter to delete one AuthIdentity
     *   }
     * })
     * 
     */
    delete<T extends AuthIdentityDeleteArgs>(args: SelectSubset<T, AuthIdentityDeleteArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthIdentity.
     * @param {AuthIdentityUpdateArgs} args - Arguments to update one AuthIdentity.
     * @example
     * // Update one AuthIdentity
     * const authIdentity = await prisma.authIdentity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthIdentityUpdateArgs>(args: SelectSubset<T, AuthIdentityUpdateArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthIdentities.
     * @param {AuthIdentityDeleteManyArgs} args - Arguments to filter AuthIdentities to delete.
     * @example
     * // Delete a few AuthIdentities
     * const { count } = await prisma.authIdentity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthIdentityDeleteManyArgs>(args?: SelectSubset<T, AuthIdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthIdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthIdentities
     * const authIdentity = await prisma.authIdentity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthIdentityUpdateManyArgs>(args: SelectSubset<T, AuthIdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthIdentity.
     * @param {AuthIdentityUpsertArgs} args - Arguments to update or create a AuthIdentity.
     * @example
     * // Update or create a AuthIdentity
     * const authIdentity = await prisma.authIdentity.upsert({
     *   create: {
     *     // ... data to create a AuthIdentity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthIdentity we want to update
     *   }
     * })
     */
    upsert<T extends AuthIdentityUpsertArgs>(args: SelectSubset<T, AuthIdentityUpsertArgs<ExtArgs>>): Prisma__AuthIdentityClient<$Result.GetResult<Prisma.$AuthIdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthIdentityCountArgs} args - Arguments to filter AuthIdentities to count.
     * @example
     * // Count the number of AuthIdentities
     * const count = await prisma.authIdentity.count({
     *   where: {
     *     // ... the filter for the AuthIdentities we want to count
     *   }
     * })
    **/
    count<T extends AuthIdentityCountArgs>(
      args?: Subset<T, AuthIdentityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthIdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthIdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthIdentityAggregateArgs>(args: Subset<T, AuthIdentityAggregateArgs>): Prisma.PrismaPromise<GetAuthIdentityAggregateType<T>>

    /**
     * Group by AuthIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthIdentityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthIdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthIdentityGroupByArgs['orderBy'] }
        : { orderBy?: AuthIdentityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthIdentity model
   */
  readonly fields: AuthIdentityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthIdentity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthIdentityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthIdentity model
   */
  interface AuthIdentityFieldRefs {
    readonly id: FieldRef<"AuthIdentity", 'BigInt'>
    readonly userId: FieldRef<"AuthIdentity", 'BigInt'>
    readonly provider: FieldRef<"AuthIdentity", 'String'>
    readonly providerUserId: FieldRef<"AuthIdentity", 'String'>
    readonly createdAt: FieldRef<"AuthIdentity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthIdentity findUnique
   */
  export type AuthIdentityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * Filter, which AuthIdentity to fetch.
     */
    where: AuthIdentityWhereUniqueInput
  }

  /**
   * AuthIdentity findUniqueOrThrow
   */
  export type AuthIdentityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * Filter, which AuthIdentity to fetch.
     */
    where: AuthIdentityWhereUniqueInput
  }

  /**
   * AuthIdentity findFirst
   */
  export type AuthIdentityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * Filter, which AuthIdentity to fetch.
     */
    where?: AuthIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthIdentities to fetch.
     */
    orderBy?: AuthIdentityOrderByWithRelationInput | AuthIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthIdentities.
     */
    cursor?: AuthIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthIdentities.
     */
    distinct?: AuthIdentityScalarFieldEnum | AuthIdentityScalarFieldEnum[]
  }

  /**
   * AuthIdentity findFirstOrThrow
   */
  export type AuthIdentityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * Filter, which AuthIdentity to fetch.
     */
    where?: AuthIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthIdentities to fetch.
     */
    orderBy?: AuthIdentityOrderByWithRelationInput | AuthIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthIdentities.
     */
    cursor?: AuthIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthIdentities.
     */
    distinct?: AuthIdentityScalarFieldEnum | AuthIdentityScalarFieldEnum[]
  }

  /**
   * AuthIdentity findMany
   */
  export type AuthIdentityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * Filter, which AuthIdentities to fetch.
     */
    where?: AuthIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthIdentities to fetch.
     */
    orderBy?: AuthIdentityOrderByWithRelationInput | AuthIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthIdentities.
     */
    cursor?: AuthIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthIdentities.
     */
    skip?: number
    distinct?: AuthIdentityScalarFieldEnum | AuthIdentityScalarFieldEnum[]
  }

  /**
   * AuthIdentity create
   */
  export type AuthIdentityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthIdentity.
     */
    data: XOR<AuthIdentityCreateInput, AuthIdentityUncheckedCreateInput>
  }

  /**
   * AuthIdentity createMany
   */
  export type AuthIdentityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthIdentities.
     */
    data: AuthIdentityCreateManyInput | AuthIdentityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthIdentity update
   */
  export type AuthIdentityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthIdentity.
     */
    data: XOR<AuthIdentityUpdateInput, AuthIdentityUncheckedUpdateInput>
    /**
     * Choose, which AuthIdentity to update.
     */
    where: AuthIdentityWhereUniqueInput
  }

  /**
   * AuthIdentity updateMany
   */
  export type AuthIdentityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthIdentities.
     */
    data: XOR<AuthIdentityUpdateManyMutationInput, AuthIdentityUncheckedUpdateManyInput>
    /**
     * Filter which AuthIdentities to update
     */
    where?: AuthIdentityWhereInput
    /**
     * Limit how many AuthIdentities to update.
     */
    limit?: number
  }

  /**
   * AuthIdentity upsert
   */
  export type AuthIdentityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthIdentity to update in case it exists.
     */
    where: AuthIdentityWhereUniqueInput
    /**
     * In case the AuthIdentity found by the `where` argument doesn't exist, create a new AuthIdentity with this data.
     */
    create: XOR<AuthIdentityCreateInput, AuthIdentityUncheckedCreateInput>
    /**
     * In case the AuthIdentity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthIdentityUpdateInput, AuthIdentityUncheckedUpdateInput>
  }

  /**
   * AuthIdentity delete
   */
  export type AuthIdentityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
    /**
     * Filter which AuthIdentity to delete.
     */
    where: AuthIdentityWhereUniqueInput
  }

  /**
   * AuthIdentity deleteMany
   */
  export type AuthIdentityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthIdentities to delete
     */
    where?: AuthIdentityWhereInput
    /**
     * Limit how many AuthIdentities to delete.
     */
    limit?: number
  }

  /**
   * AuthIdentity without action
   */
  export type AuthIdentityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthIdentity
     */
    select?: AuthIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthIdentity
     */
    omit?: AuthIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIdentityInclude<ExtArgs> | null
  }


  /**
   * Model ProviderAccount
   */

  export type AggregateProviderAccount = {
    _count: ProviderAccountCountAggregateOutputType | null
    _avg: ProviderAccountAvgAggregateOutputType | null
    _sum: ProviderAccountSumAggregateOutputType | null
    _min: ProviderAccountMinAggregateOutputType | null
    _max: ProviderAccountMaxAggregateOutputType | null
  }

  export type ProviderAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProviderAccountSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type ProviderAccountMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    name: string | null
    type: $Enums.ProviderType | null
    protocol: $Enums.ProviderProtocol | null
    isDefault: boolean | null
    baseUrl: string | null
    encryptedApiKey: string | null
    defaultModel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderAccountMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    name: string | null
    type: $Enums.ProviderType | null
    protocol: $Enums.ProviderProtocol | null
    isDefault: boolean | null
    baseUrl: string | null
    encryptedApiKey: string | null
    defaultModel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderAccountCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    protocol: number
    isDefault: number
    baseUrl: number
    encryptedApiKey: number
    defaultModel: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderAccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProviderAccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProviderAccountMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    protocol?: true
    isDefault?: true
    baseUrl?: true
    encryptedApiKey?: true
    defaultModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    protocol?: true
    isDefault?: true
    baseUrl?: true
    encryptedApiKey?: true
    defaultModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderAccountCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    protocol?: true
    isDefault?: true
    baseUrl?: true
    encryptedApiKey?: true
    defaultModel?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderAccount to aggregate.
     */
    where?: ProviderAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAccounts to fetch.
     */
    orderBy?: ProviderAccountOrderByWithRelationInput | ProviderAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderAccounts
    **/
    _count?: true | ProviderAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderAccountMaxAggregateInputType
  }

  export type GetProviderAccountAggregateType<T extends ProviderAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderAccount[P]>
      : GetScalarType<T[P], AggregateProviderAccount[P]>
  }




  export type ProviderAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderAccountWhereInput
    orderBy?: ProviderAccountOrderByWithAggregationInput | ProviderAccountOrderByWithAggregationInput[]
    by: ProviderAccountScalarFieldEnum[] | ProviderAccountScalarFieldEnum
    having?: ProviderAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderAccountCountAggregateInputType | true
    _avg?: ProviderAccountAvgAggregateInputType
    _sum?: ProviderAccountSumAggregateInputType
    _min?: ProviderAccountMinAggregateInputType
    _max?: ProviderAccountMaxAggregateInputType
  }

  export type ProviderAccountGroupByOutputType = {
    id: bigint
    userId: bigint
    name: string
    type: $Enums.ProviderType
    protocol: $Enums.ProviderProtocol
    isDefault: boolean
    baseUrl: string | null
    encryptedApiKey: string
    defaultModel: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ProviderAccountCountAggregateOutputType | null
    _avg: ProviderAccountAvgAggregateOutputType | null
    _sum: ProviderAccountSumAggregateOutputType | null
    _min: ProviderAccountMinAggregateOutputType | null
    _max: ProviderAccountMaxAggregateOutputType | null
  }

  type GetProviderAccountGroupByPayload<T extends ProviderAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderAccountGroupByOutputType[P]>
        }
      >
    >


  export type ProviderAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    protocol?: boolean
    isDefault?: boolean
    baseUrl?: boolean
    encryptedApiKey?: boolean
    defaultModel?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerAccount"]>



  export type ProviderAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    protocol?: boolean
    isDefault?: boolean
    baseUrl?: boolean
    encryptedApiKey?: boolean
    defaultModel?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type" | "protocol" | "isDefault" | "baseUrl" | "encryptedApiKey" | "defaultModel" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["providerAccount"]>
  export type ProviderAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProviderAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      name: string
      type: $Enums.ProviderType
      protocol: $Enums.ProviderProtocol
      isDefault: boolean
      baseUrl: string | null
      encryptedApiKey: string
      defaultModel: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["providerAccount"]>
    composites: {}
  }

  type ProviderAccountGetPayload<S extends boolean | null | undefined | ProviderAccountDefaultArgs> = $Result.GetResult<Prisma.$ProviderAccountPayload, S>

  type ProviderAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderAccountCountAggregateInputType | true
    }

  export interface ProviderAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderAccount'], meta: { name: 'ProviderAccount' } }
    /**
     * Find zero or one ProviderAccount that matches the filter.
     * @param {ProviderAccountFindUniqueArgs} args - Arguments to find a ProviderAccount
     * @example
     * // Get one ProviderAccount
     * const providerAccount = await prisma.providerAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderAccountFindUniqueArgs>(args: SelectSubset<T, ProviderAccountFindUniqueArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderAccountFindUniqueOrThrowArgs} args - Arguments to find a ProviderAccount
     * @example
     * // Get one ProviderAccount
     * const providerAccount = await prisma.providerAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAccountFindFirstArgs} args - Arguments to find a ProviderAccount
     * @example
     * // Get one ProviderAccount
     * const providerAccount = await prisma.providerAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderAccountFindFirstArgs>(args?: SelectSubset<T, ProviderAccountFindFirstArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAccountFindFirstOrThrowArgs} args - Arguments to find a ProviderAccount
     * @example
     * // Get one ProviderAccount
     * const providerAccount = await prisma.providerAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderAccounts
     * const providerAccounts = await prisma.providerAccount.findMany()
     * 
     * // Get first 10 ProviderAccounts
     * const providerAccounts = await prisma.providerAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerAccountWithIdOnly = await prisma.providerAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderAccountFindManyArgs>(args?: SelectSubset<T, ProviderAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderAccount.
     * @param {ProviderAccountCreateArgs} args - Arguments to create a ProviderAccount.
     * @example
     * // Create one ProviderAccount
     * const ProviderAccount = await prisma.providerAccount.create({
     *   data: {
     *     // ... data to create a ProviderAccount
     *   }
     * })
     * 
     */
    create<T extends ProviderAccountCreateArgs>(args: SelectSubset<T, ProviderAccountCreateArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderAccounts.
     * @param {ProviderAccountCreateManyArgs} args - Arguments to create many ProviderAccounts.
     * @example
     * // Create many ProviderAccounts
     * const providerAccount = await prisma.providerAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderAccountCreateManyArgs>(args?: SelectSubset<T, ProviderAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderAccount.
     * @param {ProviderAccountDeleteArgs} args - Arguments to delete one ProviderAccount.
     * @example
     * // Delete one ProviderAccount
     * const ProviderAccount = await prisma.providerAccount.delete({
     *   where: {
     *     // ... filter to delete one ProviderAccount
     *   }
     * })
     * 
     */
    delete<T extends ProviderAccountDeleteArgs>(args: SelectSubset<T, ProviderAccountDeleteArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderAccount.
     * @param {ProviderAccountUpdateArgs} args - Arguments to update one ProviderAccount.
     * @example
     * // Update one ProviderAccount
     * const providerAccount = await prisma.providerAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderAccountUpdateArgs>(args: SelectSubset<T, ProviderAccountUpdateArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderAccounts.
     * @param {ProviderAccountDeleteManyArgs} args - Arguments to filter ProviderAccounts to delete.
     * @example
     * // Delete a few ProviderAccounts
     * const { count } = await prisma.providerAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderAccountDeleteManyArgs>(args?: SelectSubset<T, ProviderAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderAccounts
     * const providerAccount = await prisma.providerAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderAccountUpdateManyArgs>(args: SelectSubset<T, ProviderAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderAccount.
     * @param {ProviderAccountUpsertArgs} args - Arguments to update or create a ProviderAccount.
     * @example
     * // Update or create a ProviderAccount
     * const providerAccount = await prisma.providerAccount.upsert({
     *   create: {
     *     // ... data to create a ProviderAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderAccount we want to update
     *   }
     * })
     */
    upsert<T extends ProviderAccountUpsertArgs>(args: SelectSubset<T, ProviderAccountUpsertArgs<ExtArgs>>): Prisma__ProviderAccountClient<$Result.GetResult<Prisma.$ProviderAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAccountCountArgs} args - Arguments to filter ProviderAccounts to count.
     * @example
     * // Count the number of ProviderAccounts
     * const count = await prisma.providerAccount.count({
     *   where: {
     *     // ... the filter for the ProviderAccounts we want to count
     *   }
     * })
    **/
    count<T extends ProviderAccountCountArgs>(
      args?: Subset<T, ProviderAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAccountAggregateArgs>(args: Subset<T, ProviderAccountAggregateArgs>): Prisma.PrismaPromise<GetProviderAccountAggregateType<T>>

    /**
     * Group by ProviderAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderAccountGroupByArgs['orderBy'] }
        : { orderBy?: ProviderAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderAccount model
   */
  readonly fields: ProviderAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderAccount model
   */
  interface ProviderAccountFieldRefs {
    readonly id: FieldRef<"ProviderAccount", 'BigInt'>
    readonly userId: FieldRef<"ProviderAccount", 'BigInt'>
    readonly name: FieldRef<"ProviderAccount", 'String'>
    readonly type: FieldRef<"ProviderAccount", 'ProviderType'>
    readonly protocol: FieldRef<"ProviderAccount", 'ProviderProtocol'>
    readonly isDefault: FieldRef<"ProviderAccount", 'Boolean'>
    readonly baseUrl: FieldRef<"ProviderAccount", 'String'>
    readonly encryptedApiKey: FieldRef<"ProviderAccount", 'String'>
    readonly defaultModel: FieldRef<"ProviderAccount", 'String'>
    readonly metadata: FieldRef<"ProviderAccount", 'Json'>
    readonly createdAt: FieldRef<"ProviderAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderAccount findUnique
   */
  export type ProviderAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAccount to fetch.
     */
    where: ProviderAccountWhereUniqueInput
  }

  /**
   * ProviderAccount findUniqueOrThrow
   */
  export type ProviderAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAccount to fetch.
     */
    where: ProviderAccountWhereUniqueInput
  }

  /**
   * ProviderAccount findFirst
   */
  export type ProviderAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAccount to fetch.
     */
    where?: ProviderAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAccounts to fetch.
     */
    orderBy?: ProviderAccountOrderByWithRelationInput | ProviderAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderAccounts.
     */
    cursor?: ProviderAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderAccounts.
     */
    distinct?: ProviderAccountScalarFieldEnum | ProviderAccountScalarFieldEnum[]
  }

  /**
   * ProviderAccount findFirstOrThrow
   */
  export type ProviderAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAccount to fetch.
     */
    where?: ProviderAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAccounts to fetch.
     */
    orderBy?: ProviderAccountOrderByWithRelationInput | ProviderAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderAccounts.
     */
    cursor?: ProviderAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderAccounts.
     */
    distinct?: ProviderAccountScalarFieldEnum | ProviderAccountScalarFieldEnum[]
  }

  /**
   * ProviderAccount findMany
   */
  export type ProviderAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAccounts to fetch.
     */
    where?: ProviderAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAccounts to fetch.
     */
    orderBy?: ProviderAccountOrderByWithRelationInput | ProviderAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderAccounts.
     */
    cursor?: ProviderAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAccounts.
     */
    skip?: number
    distinct?: ProviderAccountScalarFieldEnum | ProviderAccountScalarFieldEnum[]
  }

  /**
   * ProviderAccount create
   */
  export type ProviderAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderAccount.
     */
    data: XOR<ProviderAccountCreateInput, ProviderAccountUncheckedCreateInput>
  }

  /**
   * ProviderAccount createMany
   */
  export type ProviderAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderAccounts.
     */
    data: ProviderAccountCreateManyInput | ProviderAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderAccount update
   */
  export type ProviderAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderAccount.
     */
    data: XOR<ProviderAccountUpdateInput, ProviderAccountUncheckedUpdateInput>
    /**
     * Choose, which ProviderAccount to update.
     */
    where: ProviderAccountWhereUniqueInput
  }

  /**
   * ProviderAccount updateMany
   */
  export type ProviderAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderAccounts.
     */
    data: XOR<ProviderAccountUpdateManyMutationInput, ProviderAccountUncheckedUpdateManyInput>
    /**
     * Filter which ProviderAccounts to update
     */
    where?: ProviderAccountWhereInput
    /**
     * Limit how many ProviderAccounts to update.
     */
    limit?: number
  }

  /**
   * ProviderAccount upsert
   */
  export type ProviderAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderAccount to update in case it exists.
     */
    where: ProviderAccountWhereUniqueInput
    /**
     * In case the ProviderAccount found by the `where` argument doesn't exist, create a new ProviderAccount with this data.
     */
    create: XOR<ProviderAccountCreateInput, ProviderAccountUncheckedCreateInput>
    /**
     * In case the ProviderAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderAccountUpdateInput, ProviderAccountUncheckedUpdateInput>
  }

  /**
   * ProviderAccount delete
   */
  export type ProviderAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
    /**
     * Filter which ProviderAccount to delete.
     */
    where: ProviderAccountWhereUniqueInput
  }

  /**
   * ProviderAccount deleteMany
   */
  export type ProviderAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderAccounts to delete
     */
    where?: ProviderAccountWhereInput
    /**
     * Limit how many ProviderAccounts to delete.
     */
    limit?: number
  }

  /**
   * ProviderAccount without action
   */
  export type ProviderAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAccount
     */
    select?: ProviderAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAccount
     */
    omit?: ProviderAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAccountInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    id: number | null
    ownerUserId: number | null
    latestVersionNo: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    id: bigint | null
    ownerUserId: bigint | null
    latestVersionNo: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: bigint | null
    ownerUserId: bigint | null
    slug: string | null
    name: string | null
    status: $Enums.WorkflowStatus | null
    latestVersionNo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: bigint | null
    ownerUserId: bigint | null
    slug: string | null
    name: string | null
    status: $Enums.WorkflowStatus | null
    latestVersionNo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    ownerUserId: number
    slug: number
    name: number
    status: number
    latestVersionNo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    id?: true
    ownerUserId?: true
    latestVersionNo?: true
  }

  export type WorkflowSumAggregateInputType = {
    id?: true
    ownerUserId?: true
    latestVersionNo?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    ownerUserId?: true
    slug?: true
    name?: true
    status?: true
    latestVersionNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    ownerUserId?: true
    slug?: true
    name?: true
    status?: true
    latestVersionNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    ownerUserId?: true
    slug?: true
    name?: true
    status?: true
    latestVersionNo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: bigint
    ownerUserId: bigint
    slug: string
    name: string
    status: $Enums.WorkflowStatus
    latestVersionNo: number
    createdAt: Date
    updatedAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerUserId?: boolean
    slug?: boolean
    name?: boolean
    status?: boolean
    latestVersionNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Workflow$versionsArgs<ExtArgs>
    runs?: boolean | Workflow$runsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>



  export type WorkflowSelectScalar = {
    id?: boolean
    ownerUserId?: boolean
    slug?: boolean
    name?: boolean
    status?: boolean
    latestVersionNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerUserId" | "slug" | "name" | "status" | "latestVersionNo" | "createdAt" | "updatedAt", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    versions?: boolean | Workflow$versionsArgs<ExtArgs>
    runs?: boolean | Workflow$runsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      versions: Prisma.$WorkflowVersionPayload<ExtArgs>[]
      runs: Prisma.$WorkflowRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      ownerUserId: bigint
      slug: string
      name: string
      status: $Enums.WorkflowStatus
      latestVersionNo: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    versions<T extends Workflow$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    runs<T extends Workflow$runsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$runsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'BigInt'>
    readonly ownerUserId: FieldRef<"Workflow", 'BigInt'>
    readonly slug: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly status: FieldRef<"Workflow", 'WorkflowStatus'>
    readonly latestVersionNo: FieldRef<"Workflow", 'Int'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.versions
   */
  export type Workflow$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    where?: WorkflowVersionWhereInput
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    cursor?: WorkflowVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * Workflow.runs
   */
  export type Workflow$runsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    where?: WorkflowRunWhereInput
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    cursor?: WorkflowRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowVersion
   */

  export type AggregateWorkflowVersion = {
    _count: WorkflowVersionCountAggregateOutputType | null
    _avg: WorkflowVersionAvgAggregateOutputType | null
    _sum: WorkflowVersionSumAggregateOutputType | null
    _min: WorkflowVersionMinAggregateOutputType | null
    _max: WorkflowVersionMaxAggregateOutputType | null
  }

  export type WorkflowVersionAvgAggregateOutputType = {
    id: number | null
    workflowId: number | null
    versionNo: number | null
    createdBy: number | null
  }

  export type WorkflowVersionSumAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    versionNo: number | null
    createdBy: bigint | null
  }

  export type WorkflowVersionMinAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    versionNo: number | null
    changelog: string | null
    createdBy: bigint | null
    createdAt: Date | null
  }

  export type WorkflowVersionMaxAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    versionNo: number | null
    changelog: string | null
    createdBy: bigint | null
    createdAt: Date | null
  }

  export type WorkflowVersionCountAggregateOutputType = {
    id: number
    workflowId: number
    versionNo: number
    graph: number
    changelog: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type WorkflowVersionAvgAggregateInputType = {
    id?: true
    workflowId?: true
    versionNo?: true
    createdBy?: true
  }

  export type WorkflowVersionSumAggregateInputType = {
    id?: true
    workflowId?: true
    versionNo?: true
    createdBy?: true
  }

  export type WorkflowVersionMinAggregateInputType = {
    id?: true
    workflowId?: true
    versionNo?: true
    changelog?: true
    createdBy?: true
    createdAt?: true
  }

  export type WorkflowVersionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    versionNo?: true
    changelog?: true
    createdBy?: true
    createdAt?: true
  }

  export type WorkflowVersionCountAggregateInputType = {
    id?: true
    workflowId?: true
    versionNo?: true
    graph?: true
    changelog?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowVersion to aggregate.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowVersions
    **/
    _count?: true | WorkflowVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowVersionMaxAggregateInputType
  }

  export type GetWorkflowVersionAggregateType<T extends WorkflowVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowVersion[P]>
      : GetScalarType<T[P], AggregateWorkflowVersion[P]>
  }




  export type WorkflowVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowVersionWhereInput
    orderBy?: WorkflowVersionOrderByWithAggregationInput | WorkflowVersionOrderByWithAggregationInput[]
    by: WorkflowVersionScalarFieldEnum[] | WorkflowVersionScalarFieldEnum
    having?: WorkflowVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowVersionCountAggregateInputType | true
    _avg?: WorkflowVersionAvgAggregateInputType
    _sum?: WorkflowVersionSumAggregateInputType
    _min?: WorkflowVersionMinAggregateInputType
    _max?: WorkflowVersionMaxAggregateInputType
  }

  export type WorkflowVersionGroupByOutputType = {
    id: bigint
    workflowId: bigint
    versionNo: number
    graph: JsonValue
    changelog: string | null
    createdBy: bigint | null
    createdAt: Date
    _count: WorkflowVersionCountAggregateOutputType | null
    _avg: WorkflowVersionAvgAggregateOutputType | null
    _sum: WorkflowVersionSumAggregateOutputType | null
    _min: WorkflowVersionMinAggregateOutputType | null
    _max: WorkflowVersionMaxAggregateOutputType | null
  }

  type GetWorkflowVersionGroupByPayload<T extends WorkflowVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowVersionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowVersionGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    versionNo?: boolean
    graph?: boolean
    changelog?: boolean
    createdBy?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowVersion"]>



  export type WorkflowVersionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    versionNo?: boolean
    graph?: boolean
    changelog?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type WorkflowVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "versionNo" | "graph" | "changelog" | "createdBy" | "createdAt", ExtArgs["result"]["workflowVersion"]>
  export type WorkflowVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowVersion"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      workflowId: bigint
      versionNo: number
      graph: Prisma.JsonValue
      changelog: string | null
      createdBy: bigint | null
      createdAt: Date
    }, ExtArgs["result"]["workflowVersion"]>
    composites: {}
  }

  type WorkflowVersionGetPayload<S extends boolean | null | undefined | WorkflowVersionDefaultArgs> = $Result.GetResult<Prisma.$WorkflowVersionPayload, S>

  type WorkflowVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowVersionCountAggregateInputType | true
    }

  export interface WorkflowVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowVersion'], meta: { name: 'WorkflowVersion' } }
    /**
     * Find zero or one WorkflowVersion that matches the filter.
     * @param {WorkflowVersionFindUniqueArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowVersionFindUniqueArgs>(args: SelectSubset<T, WorkflowVersionFindUniqueArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowVersionFindUniqueOrThrowArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionFindFirstArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowVersionFindFirstArgs>(args?: SelectSubset<T, WorkflowVersionFindFirstArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionFindFirstOrThrowArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowVersions
     * const workflowVersions = await prisma.workflowVersion.findMany()
     * 
     * // Get first 10 WorkflowVersions
     * const workflowVersions = await prisma.workflowVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowVersionWithIdOnly = await prisma.workflowVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowVersionFindManyArgs>(args?: SelectSubset<T, WorkflowVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowVersion.
     * @param {WorkflowVersionCreateArgs} args - Arguments to create a WorkflowVersion.
     * @example
     * // Create one WorkflowVersion
     * const WorkflowVersion = await prisma.workflowVersion.create({
     *   data: {
     *     // ... data to create a WorkflowVersion
     *   }
     * })
     * 
     */
    create<T extends WorkflowVersionCreateArgs>(args: SelectSubset<T, WorkflowVersionCreateArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowVersions.
     * @param {WorkflowVersionCreateManyArgs} args - Arguments to create many WorkflowVersions.
     * @example
     * // Create many WorkflowVersions
     * const workflowVersion = await prisma.workflowVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowVersionCreateManyArgs>(args?: SelectSubset<T, WorkflowVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkflowVersion.
     * @param {WorkflowVersionDeleteArgs} args - Arguments to delete one WorkflowVersion.
     * @example
     * // Delete one WorkflowVersion
     * const WorkflowVersion = await prisma.workflowVersion.delete({
     *   where: {
     *     // ... filter to delete one WorkflowVersion
     *   }
     * })
     * 
     */
    delete<T extends WorkflowVersionDeleteArgs>(args: SelectSubset<T, WorkflowVersionDeleteArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowVersion.
     * @param {WorkflowVersionUpdateArgs} args - Arguments to update one WorkflowVersion.
     * @example
     * // Update one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowVersionUpdateArgs>(args: SelectSubset<T, WorkflowVersionUpdateArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowVersions.
     * @param {WorkflowVersionDeleteManyArgs} args - Arguments to filter WorkflowVersions to delete.
     * @example
     * // Delete a few WorkflowVersions
     * const { count } = await prisma.workflowVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowVersionDeleteManyArgs>(args?: SelectSubset<T, WorkflowVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowVersions
     * const workflowVersion = await prisma.workflowVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowVersionUpdateManyArgs>(args: SelectSubset<T, WorkflowVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowVersion.
     * @param {WorkflowVersionUpsertArgs} args - Arguments to update or create a WorkflowVersion.
     * @example
     * // Update or create a WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.upsert({
     *   create: {
     *     // ... data to create a WorkflowVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowVersion we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowVersionUpsertArgs>(args: SelectSubset<T, WorkflowVersionUpsertArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionCountArgs} args - Arguments to filter WorkflowVersions to count.
     * @example
     * // Count the number of WorkflowVersions
     * const count = await prisma.workflowVersion.count({
     *   where: {
     *     // ... the filter for the WorkflowVersions we want to count
     *   }
     * })
    **/
    count<T extends WorkflowVersionCountArgs>(
      args?: Subset<T, WorkflowVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowVersionAggregateArgs>(args: Subset<T, WorkflowVersionAggregateArgs>): Prisma.PrismaPromise<GetWorkflowVersionAggregateType<T>>

    /**
     * Group by WorkflowVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowVersionGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowVersion model
   */
  readonly fields: WorkflowVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowVersion model
   */
  interface WorkflowVersionFieldRefs {
    readonly id: FieldRef<"WorkflowVersion", 'BigInt'>
    readonly workflowId: FieldRef<"WorkflowVersion", 'BigInt'>
    readonly versionNo: FieldRef<"WorkflowVersion", 'Int'>
    readonly graph: FieldRef<"WorkflowVersion", 'Json'>
    readonly changelog: FieldRef<"WorkflowVersion", 'String'>
    readonly createdBy: FieldRef<"WorkflowVersion", 'BigInt'>
    readonly createdAt: FieldRef<"WorkflowVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowVersion findUnique
   */
  export type WorkflowVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion findUniqueOrThrow
   */
  export type WorkflowVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion findFirst
   */
  export type WorkflowVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowVersions.
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowVersions.
     */
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * WorkflowVersion findFirstOrThrow
   */
  export type WorkflowVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowVersions.
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowVersions.
     */
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * WorkflowVersion findMany
   */
  export type WorkflowVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersions to fetch.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowVersions.
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * WorkflowVersion create
   */
  export type WorkflowVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowVersion.
     */
    data: XOR<WorkflowVersionCreateInput, WorkflowVersionUncheckedCreateInput>
  }

  /**
   * WorkflowVersion createMany
   */
  export type WorkflowVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowVersions.
     */
    data: WorkflowVersionCreateManyInput | WorkflowVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowVersion update
   */
  export type WorkflowVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowVersion.
     */
    data: XOR<WorkflowVersionUpdateInput, WorkflowVersionUncheckedUpdateInput>
    /**
     * Choose, which WorkflowVersion to update.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion updateMany
   */
  export type WorkflowVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowVersions.
     */
    data: XOR<WorkflowVersionUpdateManyMutationInput, WorkflowVersionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowVersions to update
     */
    where?: WorkflowVersionWhereInput
    /**
     * Limit how many WorkflowVersions to update.
     */
    limit?: number
  }

  /**
   * WorkflowVersion upsert
   */
  export type WorkflowVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowVersion to update in case it exists.
     */
    where: WorkflowVersionWhereUniqueInput
    /**
     * In case the WorkflowVersion found by the `where` argument doesn't exist, create a new WorkflowVersion with this data.
     */
    create: XOR<WorkflowVersionCreateInput, WorkflowVersionUncheckedCreateInput>
    /**
     * In case the WorkflowVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowVersionUpdateInput, WorkflowVersionUncheckedUpdateInput>
  }

  /**
   * WorkflowVersion delete
   */
  export type WorkflowVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter which WorkflowVersion to delete.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion deleteMany
   */
  export type WorkflowVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowVersions to delete
     */
    where?: WorkflowVersionWhereInput
    /**
     * Limit how many WorkflowVersions to delete.
     */
    limit?: number
  }

  /**
   * WorkflowVersion without action
   */
  export type WorkflowVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowRun
   */

  export type AggregateWorkflowRun = {
    _count: WorkflowRunCountAggregateOutputType | null
    _avg: WorkflowRunAvgAggregateOutputType | null
    _sum: WorkflowRunSumAggregateOutputType | null
    _min: WorkflowRunMinAggregateOutputType | null
    _max: WorkflowRunMaxAggregateOutputType | null
  }

  export type WorkflowRunAvgAggregateOutputType = {
    id: number | null
    workflowId: number | null
    workflowVersionId: number | null
    createdBy: number | null
  }

  export type WorkflowRunSumAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    workflowVersionId: bigint | null
    createdBy: bigint | null
  }

  export type WorkflowRunMinAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    workflowVersionId: bigint | null
    triggerType: string | null
    status: $Enums.WorkflowRunStatus | null
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
    createdBy: bigint | null
    createdAt: Date | null
  }

  export type WorkflowRunMaxAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    workflowVersionId: bigint | null
    triggerType: string | null
    status: $Enums.WorkflowRunStatus | null
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
    createdBy: bigint | null
    createdAt: Date | null
  }

  export type WorkflowRunCountAggregateOutputType = {
    id: number
    workflowId: number
    workflowVersionId: number
    triggerType: number
    status: number
    startedAt: number
    finishedAt: number
    errorMessage: number
    logs: number
    metadata: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type WorkflowRunAvgAggregateInputType = {
    id?: true
    workflowId?: true
    workflowVersionId?: true
    createdBy?: true
  }

  export type WorkflowRunSumAggregateInputType = {
    id?: true
    workflowId?: true
    workflowVersionId?: true
    createdBy?: true
  }

  export type WorkflowRunMinAggregateInputType = {
    id?: true
    workflowId?: true
    workflowVersionId?: true
    triggerType?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
    createdBy?: true
    createdAt?: true
  }

  export type WorkflowRunMaxAggregateInputType = {
    id?: true
    workflowId?: true
    workflowVersionId?: true
    triggerType?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
    createdBy?: true
    createdAt?: true
  }

  export type WorkflowRunCountAggregateInputType = {
    id?: true
    workflowId?: true
    workflowVersionId?: true
    triggerType?: true
    status?: true
    startedAt?: true
    finishedAt?: true
    errorMessage?: true
    logs?: true
    metadata?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRun to aggregate.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowRuns
    **/
    _count?: true | WorkflowRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowRunMaxAggregateInputType
  }

  export type GetWorkflowRunAggregateType<T extends WorkflowRunAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowRun[P]>
      : GetScalarType<T[P], AggregateWorkflowRun[P]>
  }




  export type WorkflowRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunWhereInput
    orderBy?: WorkflowRunOrderByWithAggregationInput | WorkflowRunOrderByWithAggregationInput[]
    by: WorkflowRunScalarFieldEnum[] | WorkflowRunScalarFieldEnum
    having?: WorkflowRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowRunCountAggregateInputType | true
    _avg?: WorkflowRunAvgAggregateInputType
    _sum?: WorkflowRunSumAggregateInputType
    _min?: WorkflowRunMinAggregateInputType
    _max?: WorkflowRunMaxAggregateInputType
  }

  export type WorkflowRunGroupByOutputType = {
    id: bigint
    workflowId: bigint
    workflowVersionId: bigint | null
    triggerType: string
    status: $Enums.WorkflowRunStatus
    startedAt: Date | null
    finishedAt: Date | null
    errorMessage: string | null
    logs: JsonValue | null
    metadata: JsonValue | null
    createdBy: bigint | null
    createdAt: Date
    _count: WorkflowRunCountAggregateOutputType | null
    _avg: WorkflowRunAvgAggregateOutputType | null
    _sum: WorkflowRunSumAggregateOutputType | null
    _min: WorkflowRunMinAggregateOutputType | null
    _max: WorkflowRunMaxAggregateOutputType | null
  }

  type GetWorkflowRunGroupByPayload<T extends WorkflowRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowRunGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowRunGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    workflowVersionId?: boolean
    triggerType?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    logs?: boolean
    metadata?: boolean
    createdBy?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    creator?: boolean | WorkflowRun$creatorArgs<ExtArgs>
    steps?: boolean | WorkflowRun$stepsArgs<ExtArgs>
    assets?: boolean | WorkflowRun$assetsArgs<ExtArgs>
    _count?: boolean | WorkflowRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowRun"]>



  export type WorkflowRunSelectScalar = {
    id?: boolean
    workflowId?: boolean
    workflowVersionId?: boolean
    triggerType?: boolean
    status?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    errorMessage?: boolean
    logs?: boolean
    metadata?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type WorkflowRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "workflowVersionId" | "triggerType" | "status" | "startedAt" | "finishedAt" | "errorMessage" | "logs" | "metadata" | "createdBy" | "createdAt", ExtArgs["result"]["workflowRun"]>
  export type WorkflowRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    creator?: boolean | WorkflowRun$creatorArgs<ExtArgs>
    steps?: boolean | WorkflowRun$stepsArgs<ExtArgs>
    assets?: boolean | WorkflowRun$assetsArgs<ExtArgs>
    _count?: boolean | WorkflowRunCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkflowRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowRun"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs> | null
      steps: Prisma.$WorkflowRunStepPayload<ExtArgs>[]
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      workflowId: bigint
      workflowVersionId: bigint | null
      triggerType: string
      status: $Enums.WorkflowRunStatus
      startedAt: Date | null
      finishedAt: Date | null
      errorMessage: string | null
      logs: Prisma.JsonValue | null
      metadata: Prisma.JsonValue | null
      createdBy: bigint | null
      createdAt: Date
    }, ExtArgs["result"]["workflowRun"]>
    composites: {}
  }

  type WorkflowRunGetPayload<S extends boolean | null | undefined | WorkflowRunDefaultArgs> = $Result.GetResult<Prisma.$WorkflowRunPayload, S>

  type WorkflowRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowRunCountAggregateInputType | true
    }

  export interface WorkflowRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowRun'], meta: { name: 'WorkflowRun' } }
    /**
     * Find zero or one WorkflowRun that matches the filter.
     * @param {WorkflowRunFindUniqueArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowRunFindUniqueArgs>(args: SelectSubset<T, WorkflowRunFindUniqueArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowRunFindUniqueOrThrowArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowRunFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindFirstArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowRunFindFirstArgs>(args?: SelectSubset<T, WorkflowRunFindFirstArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindFirstOrThrowArgs} args - Arguments to find a WorkflowRun
     * @example
     * // Get one WorkflowRun
     * const workflowRun = await prisma.workflowRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowRunFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowRuns
     * const workflowRuns = await prisma.workflowRun.findMany()
     * 
     * // Get first 10 WorkflowRuns
     * const workflowRuns = await prisma.workflowRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowRunWithIdOnly = await prisma.workflowRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowRunFindManyArgs>(args?: SelectSubset<T, WorkflowRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowRun.
     * @param {WorkflowRunCreateArgs} args - Arguments to create a WorkflowRun.
     * @example
     * // Create one WorkflowRun
     * const WorkflowRun = await prisma.workflowRun.create({
     *   data: {
     *     // ... data to create a WorkflowRun
     *   }
     * })
     * 
     */
    create<T extends WorkflowRunCreateArgs>(args: SelectSubset<T, WorkflowRunCreateArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowRuns.
     * @param {WorkflowRunCreateManyArgs} args - Arguments to create many WorkflowRuns.
     * @example
     * // Create many WorkflowRuns
     * const workflowRun = await prisma.workflowRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowRunCreateManyArgs>(args?: SelectSubset<T, WorkflowRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkflowRun.
     * @param {WorkflowRunDeleteArgs} args - Arguments to delete one WorkflowRun.
     * @example
     * // Delete one WorkflowRun
     * const WorkflowRun = await prisma.workflowRun.delete({
     *   where: {
     *     // ... filter to delete one WorkflowRun
     *   }
     * })
     * 
     */
    delete<T extends WorkflowRunDeleteArgs>(args: SelectSubset<T, WorkflowRunDeleteArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowRun.
     * @param {WorkflowRunUpdateArgs} args - Arguments to update one WorkflowRun.
     * @example
     * // Update one WorkflowRun
     * const workflowRun = await prisma.workflowRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowRunUpdateArgs>(args: SelectSubset<T, WorkflowRunUpdateArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowRuns.
     * @param {WorkflowRunDeleteManyArgs} args - Arguments to filter WorkflowRuns to delete.
     * @example
     * // Delete a few WorkflowRuns
     * const { count } = await prisma.workflowRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowRunDeleteManyArgs>(args?: SelectSubset<T, WorkflowRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowRuns
     * const workflowRun = await prisma.workflowRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowRunUpdateManyArgs>(args: SelectSubset<T, WorkflowRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowRun.
     * @param {WorkflowRunUpsertArgs} args - Arguments to update or create a WorkflowRun.
     * @example
     * // Update or create a WorkflowRun
     * const workflowRun = await prisma.workflowRun.upsert({
     *   create: {
     *     // ... data to create a WorkflowRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowRun we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowRunUpsertArgs>(args: SelectSubset<T, WorkflowRunUpsertArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunCountArgs} args - Arguments to filter WorkflowRuns to count.
     * @example
     * // Count the number of WorkflowRuns
     * const count = await prisma.workflowRun.count({
     *   where: {
     *     // ... the filter for the WorkflowRuns we want to count
     *   }
     * })
    **/
    count<T extends WorkflowRunCountArgs>(
      args?: Subset<T, WorkflowRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowRunAggregateArgs>(args: Subset<T, WorkflowRunAggregateArgs>): Prisma.PrismaPromise<GetWorkflowRunAggregateType<T>>

    /**
     * Group by WorkflowRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowRunGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowRun model
   */
  readonly fields: WorkflowRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends WorkflowRun$creatorArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowRun$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    steps<T extends WorkflowRun$stepsArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowRun$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assets<T extends WorkflowRun$assetsArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowRun$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowRun model
   */
  interface WorkflowRunFieldRefs {
    readonly id: FieldRef<"WorkflowRun", 'BigInt'>
    readonly workflowId: FieldRef<"WorkflowRun", 'BigInt'>
    readonly workflowVersionId: FieldRef<"WorkflowRun", 'BigInt'>
    readonly triggerType: FieldRef<"WorkflowRun", 'String'>
    readonly status: FieldRef<"WorkflowRun", 'WorkflowRunStatus'>
    readonly startedAt: FieldRef<"WorkflowRun", 'DateTime'>
    readonly finishedAt: FieldRef<"WorkflowRun", 'DateTime'>
    readonly errorMessage: FieldRef<"WorkflowRun", 'String'>
    readonly logs: FieldRef<"WorkflowRun", 'Json'>
    readonly metadata: FieldRef<"WorkflowRun", 'Json'>
    readonly createdBy: FieldRef<"WorkflowRun", 'BigInt'>
    readonly createdAt: FieldRef<"WorkflowRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowRun findUnique
   */
  export type WorkflowRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun findUniqueOrThrow
   */
  export type WorkflowRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun findFirst
   */
  export type WorkflowRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * WorkflowRun findFirstOrThrow
   */
  export type WorkflowRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRun to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRuns.
     */
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * WorkflowRun findMany
   */
  export type WorkflowRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRuns to fetch.
     */
    where?: WorkflowRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRuns to fetch.
     */
    orderBy?: WorkflowRunOrderByWithRelationInput | WorkflowRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowRuns.
     */
    cursor?: WorkflowRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRuns.
     */
    skip?: number
    distinct?: WorkflowRunScalarFieldEnum | WorkflowRunScalarFieldEnum[]
  }

  /**
   * WorkflowRun create
   */
  export type WorkflowRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowRun.
     */
    data: XOR<WorkflowRunCreateInput, WorkflowRunUncheckedCreateInput>
  }

  /**
   * WorkflowRun createMany
   */
  export type WorkflowRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowRuns.
     */
    data: WorkflowRunCreateManyInput | WorkflowRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowRun update
   */
  export type WorkflowRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowRun.
     */
    data: XOR<WorkflowRunUpdateInput, WorkflowRunUncheckedUpdateInput>
    /**
     * Choose, which WorkflowRun to update.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun updateMany
   */
  export type WorkflowRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowRuns.
     */
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowRuns to update
     */
    where?: WorkflowRunWhereInput
    /**
     * Limit how many WorkflowRuns to update.
     */
    limit?: number
  }

  /**
   * WorkflowRun upsert
   */
  export type WorkflowRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowRun to update in case it exists.
     */
    where: WorkflowRunWhereUniqueInput
    /**
     * In case the WorkflowRun found by the `where` argument doesn't exist, create a new WorkflowRun with this data.
     */
    create: XOR<WorkflowRunCreateInput, WorkflowRunUncheckedCreateInput>
    /**
     * In case the WorkflowRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowRunUpdateInput, WorkflowRunUncheckedUpdateInput>
  }

  /**
   * WorkflowRun delete
   */
  export type WorkflowRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    /**
     * Filter which WorkflowRun to delete.
     */
    where: WorkflowRunWhereUniqueInput
  }

  /**
   * WorkflowRun deleteMany
   */
  export type WorkflowRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRuns to delete
     */
    where?: WorkflowRunWhereInput
    /**
     * Limit how many WorkflowRuns to delete.
     */
    limit?: number
  }

  /**
   * WorkflowRun.creator
   */
  export type WorkflowRun$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * WorkflowRun.steps
   */
  export type WorkflowRun$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    where?: WorkflowRunStepWhereInput
    orderBy?: WorkflowRunStepOrderByWithRelationInput | WorkflowRunStepOrderByWithRelationInput[]
    cursor?: WorkflowRunStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowRunStepScalarFieldEnum | WorkflowRunStepScalarFieldEnum[]
  }

  /**
   * WorkflowRun.assets
   */
  export type WorkflowRun$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * WorkflowRun without action
   */
  export type WorkflowRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowRunStep
   */

  export type AggregateWorkflowRunStep = {
    _count: WorkflowRunStepCountAggregateOutputType | null
    _avg: WorkflowRunStepAvgAggregateOutputType | null
    _sum: WorkflowRunStepSumAggregateOutputType | null
    _min: WorkflowRunStepMinAggregateOutputType | null
    _max: WorkflowRunStepMaxAggregateOutputType | null
  }

  export type WorkflowRunStepAvgAggregateOutputType = {
    id: number | null
    workflowRunId: number | null
    attempts: number | null
  }

  export type WorkflowRunStepSumAggregateOutputType = {
    id: bigint | null
    workflowRunId: bigint | null
    attempts: number | null
  }

  export type WorkflowRunStepMinAggregateOutputType = {
    id: bigint | null
    workflowRunId: bigint | null
    nodeId: string | null
    nodeType: string | null
    status: $Enums.WorkflowRunStatus | null
    attempts: number | null
    errorMessage: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
  }

  export type WorkflowRunStepMaxAggregateOutputType = {
    id: bigint | null
    workflowRunId: bigint | null
    nodeId: string | null
    nodeType: string | null
    status: $Enums.WorkflowRunStatus | null
    attempts: number | null
    errorMessage: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date | null
  }

  export type WorkflowRunStepCountAggregateOutputType = {
    id: number
    workflowRunId: number
    nodeId: number
    nodeType: number
    status: number
    attempts: number
    input: number
    output: number
    errorMessage: number
    startedAt: number
    finishedAt: number
    createdAt: number
    _all: number
  }


  export type WorkflowRunStepAvgAggregateInputType = {
    id?: true
    workflowRunId?: true
    attempts?: true
  }

  export type WorkflowRunStepSumAggregateInputType = {
    id?: true
    workflowRunId?: true
    attempts?: true
  }

  export type WorkflowRunStepMinAggregateInputType = {
    id?: true
    workflowRunId?: true
    nodeId?: true
    nodeType?: true
    status?: true
    attempts?: true
    errorMessage?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
  }

  export type WorkflowRunStepMaxAggregateInputType = {
    id?: true
    workflowRunId?: true
    nodeId?: true
    nodeType?: true
    status?: true
    attempts?: true
    errorMessage?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
  }

  export type WorkflowRunStepCountAggregateInputType = {
    id?: true
    workflowRunId?: true
    nodeId?: true
    nodeType?: true
    status?: true
    attempts?: true
    input?: true
    output?: true
    errorMessage?: true
    startedAt?: true
    finishedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowRunStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRunStep to aggregate.
     */
    where?: WorkflowRunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRunSteps to fetch.
     */
    orderBy?: WorkflowRunStepOrderByWithRelationInput | WorkflowRunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowRunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRunSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowRunSteps
    **/
    _count?: true | WorkflowRunStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowRunStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowRunStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowRunStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowRunStepMaxAggregateInputType
  }

  export type GetWorkflowRunStepAggregateType<T extends WorkflowRunStepAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowRunStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowRunStep[P]>
      : GetScalarType<T[P], AggregateWorkflowRunStep[P]>
  }




  export type WorkflowRunStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowRunStepWhereInput
    orderBy?: WorkflowRunStepOrderByWithAggregationInput | WorkflowRunStepOrderByWithAggregationInput[]
    by: WorkflowRunStepScalarFieldEnum[] | WorkflowRunStepScalarFieldEnum
    having?: WorkflowRunStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowRunStepCountAggregateInputType | true
    _avg?: WorkflowRunStepAvgAggregateInputType
    _sum?: WorkflowRunStepSumAggregateInputType
    _min?: WorkflowRunStepMinAggregateInputType
    _max?: WorkflowRunStepMaxAggregateInputType
  }

  export type WorkflowRunStepGroupByOutputType = {
    id: bigint
    workflowRunId: bigint
    nodeId: string
    nodeType: string
    status: $Enums.WorkflowRunStatus
    attempts: number
    input: JsonValue | null
    output: JsonValue | null
    errorMessage: string | null
    startedAt: Date | null
    finishedAt: Date | null
    createdAt: Date
    _count: WorkflowRunStepCountAggregateOutputType | null
    _avg: WorkflowRunStepAvgAggregateOutputType | null
    _sum: WorkflowRunStepSumAggregateOutputType | null
    _min: WorkflowRunStepMinAggregateOutputType | null
    _max: WorkflowRunStepMaxAggregateOutputType | null
  }

  type GetWorkflowRunStepGroupByPayload<T extends WorkflowRunStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowRunStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowRunStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowRunStepGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowRunStepGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowRunStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowRunId?: boolean
    nodeId?: boolean
    nodeType?: boolean
    status?: boolean
    attempts?: boolean
    input?: boolean
    output?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
    run?: boolean | WorkflowRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowRunStep"]>



  export type WorkflowRunStepSelectScalar = {
    id?: boolean
    workflowRunId?: boolean
    nodeId?: boolean
    nodeType?: boolean
    status?: boolean
    attempts?: boolean
    input?: boolean
    output?: boolean
    errorMessage?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    createdAt?: boolean
  }

  export type WorkflowRunStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowRunId" | "nodeId" | "nodeType" | "status" | "attempts" | "input" | "output" | "errorMessage" | "startedAt" | "finishedAt" | "createdAt", ExtArgs["result"]["workflowRunStep"]>
  export type WorkflowRunStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | WorkflowRunDefaultArgs<ExtArgs>
  }

  export type $WorkflowRunStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowRunStep"
    objects: {
      run: Prisma.$WorkflowRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      workflowRunId: bigint
      nodeId: string
      nodeType: string
      status: $Enums.WorkflowRunStatus
      attempts: number
      input: Prisma.JsonValue | null
      output: Prisma.JsonValue | null
      errorMessage: string | null
      startedAt: Date | null
      finishedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["workflowRunStep"]>
    composites: {}
  }

  type WorkflowRunStepGetPayload<S extends boolean | null | undefined | WorkflowRunStepDefaultArgs> = $Result.GetResult<Prisma.$WorkflowRunStepPayload, S>

  type WorkflowRunStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowRunStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowRunStepCountAggregateInputType | true
    }

  export interface WorkflowRunStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowRunStep'], meta: { name: 'WorkflowRunStep' } }
    /**
     * Find zero or one WorkflowRunStep that matches the filter.
     * @param {WorkflowRunStepFindUniqueArgs} args - Arguments to find a WorkflowRunStep
     * @example
     * // Get one WorkflowRunStep
     * const workflowRunStep = await prisma.workflowRunStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowRunStepFindUniqueArgs>(args: SelectSubset<T, WorkflowRunStepFindUniqueArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowRunStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowRunStepFindUniqueOrThrowArgs} args - Arguments to find a WorkflowRunStep
     * @example
     * // Get one WorkflowRunStep
     * const workflowRunStep = await prisma.workflowRunStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowRunStepFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowRunStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRunStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunStepFindFirstArgs} args - Arguments to find a WorkflowRunStep
     * @example
     * // Get one WorkflowRunStep
     * const workflowRunStep = await prisma.workflowRunStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowRunStepFindFirstArgs>(args?: SelectSubset<T, WorkflowRunStepFindFirstArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowRunStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunStepFindFirstOrThrowArgs} args - Arguments to find a WorkflowRunStep
     * @example
     * // Get one WorkflowRunStep
     * const workflowRunStep = await prisma.workflowRunStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowRunStepFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowRunStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowRunSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowRunSteps
     * const workflowRunSteps = await prisma.workflowRunStep.findMany()
     * 
     * // Get first 10 WorkflowRunSteps
     * const workflowRunSteps = await prisma.workflowRunStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowRunStepWithIdOnly = await prisma.workflowRunStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowRunStepFindManyArgs>(args?: SelectSubset<T, WorkflowRunStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowRunStep.
     * @param {WorkflowRunStepCreateArgs} args - Arguments to create a WorkflowRunStep.
     * @example
     * // Create one WorkflowRunStep
     * const WorkflowRunStep = await prisma.workflowRunStep.create({
     *   data: {
     *     // ... data to create a WorkflowRunStep
     *   }
     * })
     * 
     */
    create<T extends WorkflowRunStepCreateArgs>(args: SelectSubset<T, WorkflowRunStepCreateArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowRunSteps.
     * @param {WorkflowRunStepCreateManyArgs} args - Arguments to create many WorkflowRunSteps.
     * @example
     * // Create many WorkflowRunSteps
     * const workflowRunStep = await prisma.workflowRunStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowRunStepCreateManyArgs>(args?: SelectSubset<T, WorkflowRunStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkflowRunStep.
     * @param {WorkflowRunStepDeleteArgs} args - Arguments to delete one WorkflowRunStep.
     * @example
     * // Delete one WorkflowRunStep
     * const WorkflowRunStep = await prisma.workflowRunStep.delete({
     *   where: {
     *     // ... filter to delete one WorkflowRunStep
     *   }
     * })
     * 
     */
    delete<T extends WorkflowRunStepDeleteArgs>(args: SelectSubset<T, WorkflowRunStepDeleteArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowRunStep.
     * @param {WorkflowRunStepUpdateArgs} args - Arguments to update one WorkflowRunStep.
     * @example
     * // Update one WorkflowRunStep
     * const workflowRunStep = await prisma.workflowRunStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowRunStepUpdateArgs>(args: SelectSubset<T, WorkflowRunStepUpdateArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowRunSteps.
     * @param {WorkflowRunStepDeleteManyArgs} args - Arguments to filter WorkflowRunSteps to delete.
     * @example
     * // Delete a few WorkflowRunSteps
     * const { count } = await prisma.workflowRunStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowRunStepDeleteManyArgs>(args?: SelectSubset<T, WorkflowRunStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowRunSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowRunSteps
     * const workflowRunStep = await prisma.workflowRunStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowRunStepUpdateManyArgs>(args: SelectSubset<T, WorkflowRunStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowRunStep.
     * @param {WorkflowRunStepUpsertArgs} args - Arguments to update or create a WorkflowRunStep.
     * @example
     * // Update or create a WorkflowRunStep
     * const workflowRunStep = await prisma.workflowRunStep.upsert({
     *   create: {
     *     // ... data to create a WorkflowRunStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowRunStep we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowRunStepUpsertArgs>(args: SelectSubset<T, WorkflowRunStepUpsertArgs<ExtArgs>>): Prisma__WorkflowRunStepClient<$Result.GetResult<Prisma.$WorkflowRunStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowRunSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunStepCountArgs} args - Arguments to filter WorkflowRunSteps to count.
     * @example
     * // Count the number of WorkflowRunSteps
     * const count = await prisma.workflowRunStep.count({
     *   where: {
     *     // ... the filter for the WorkflowRunSteps we want to count
     *   }
     * })
    **/
    count<T extends WorkflowRunStepCountArgs>(
      args?: Subset<T, WorkflowRunStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowRunStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowRunStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowRunStepAggregateArgs>(args: Subset<T, WorkflowRunStepAggregateArgs>): Prisma.PrismaPromise<GetWorkflowRunStepAggregateType<T>>

    /**
     * Group by WorkflowRunStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowRunStepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowRunStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowRunStepGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowRunStepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowRunStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowRunStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowRunStep model
   */
  readonly fields: WorkflowRunStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowRunStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowRunStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends WorkflowRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowRunDefaultArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowRunStep model
   */
  interface WorkflowRunStepFieldRefs {
    readonly id: FieldRef<"WorkflowRunStep", 'BigInt'>
    readonly workflowRunId: FieldRef<"WorkflowRunStep", 'BigInt'>
    readonly nodeId: FieldRef<"WorkflowRunStep", 'String'>
    readonly nodeType: FieldRef<"WorkflowRunStep", 'String'>
    readonly status: FieldRef<"WorkflowRunStep", 'WorkflowRunStatus'>
    readonly attempts: FieldRef<"WorkflowRunStep", 'Int'>
    readonly input: FieldRef<"WorkflowRunStep", 'Json'>
    readonly output: FieldRef<"WorkflowRunStep", 'Json'>
    readonly errorMessage: FieldRef<"WorkflowRunStep", 'String'>
    readonly startedAt: FieldRef<"WorkflowRunStep", 'DateTime'>
    readonly finishedAt: FieldRef<"WorkflowRunStep", 'DateTime'>
    readonly createdAt: FieldRef<"WorkflowRunStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowRunStep findUnique
   */
  export type WorkflowRunStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRunStep to fetch.
     */
    where: WorkflowRunStepWhereUniqueInput
  }

  /**
   * WorkflowRunStep findUniqueOrThrow
   */
  export type WorkflowRunStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRunStep to fetch.
     */
    where: WorkflowRunStepWhereUniqueInput
  }

  /**
   * WorkflowRunStep findFirst
   */
  export type WorkflowRunStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRunStep to fetch.
     */
    where?: WorkflowRunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRunSteps to fetch.
     */
    orderBy?: WorkflowRunStepOrderByWithRelationInput | WorkflowRunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRunSteps.
     */
    cursor?: WorkflowRunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRunSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRunSteps.
     */
    distinct?: WorkflowRunStepScalarFieldEnum | WorkflowRunStepScalarFieldEnum[]
  }

  /**
   * WorkflowRunStep findFirstOrThrow
   */
  export type WorkflowRunStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRunStep to fetch.
     */
    where?: WorkflowRunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRunSteps to fetch.
     */
    orderBy?: WorkflowRunStepOrderByWithRelationInput | WorkflowRunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowRunSteps.
     */
    cursor?: WorkflowRunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRunSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowRunSteps.
     */
    distinct?: WorkflowRunStepScalarFieldEnum | WorkflowRunStepScalarFieldEnum[]
  }

  /**
   * WorkflowRunStep findMany
   */
  export type WorkflowRunStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowRunSteps to fetch.
     */
    where?: WorkflowRunStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowRunSteps to fetch.
     */
    orderBy?: WorkflowRunStepOrderByWithRelationInput | WorkflowRunStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowRunSteps.
     */
    cursor?: WorkflowRunStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowRunSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowRunSteps.
     */
    skip?: number
    distinct?: WorkflowRunStepScalarFieldEnum | WorkflowRunStepScalarFieldEnum[]
  }

  /**
   * WorkflowRunStep create
   */
  export type WorkflowRunStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowRunStep.
     */
    data: XOR<WorkflowRunStepCreateInput, WorkflowRunStepUncheckedCreateInput>
  }

  /**
   * WorkflowRunStep createMany
   */
  export type WorkflowRunStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowRunSteps.
     */
    data: WorkflowRunStepCreateManyInput | WorkflowRunStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowRunStep update
   */
  export type WorkflowRunStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowRunStep.
     */
    data: XOR<WorkflowRunStepUpdateInput, WorkflowRunStepUncheckedUpdateInput>
    /**
     * Choose, which WorkflowRunStep to update.
     */
    where: WorkflowRunStepWhereUniqueInput
  }

  /**
   * WorkflowRunStep updateMany
   */
  export type WorkflowRunStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowRunSteps.
     */
    data: XOR<WorkflowRunStepUpdateManyMutationInput, WorkflowRunStepUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowRunSteps to update
     */
    where?: WorkflowRunStepWhereInput
    /**
     * Limit how many WorkflowRunSteps to update.
     */
    limit?: number
  }

  /**
   * WorkflowRunStep upsert
   */
  export type WorkflowRunStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowRunStep to update in case it exists.
     */
    where: WorkflowRunStepWhereUniqueInput
    /**
     * In case the WorkflowRunStep found by the `where` argument doesn't exist, create a new WorkflowRunStep with this data.
     */
    create: XOR<WorkflowRunStepCreateInput, WorkflowRunStepUncheckedCreateInput>
    /**
     * In case the WorkflowRunStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowRunStepUpdateInput, WorkflowRunStepUncheckedUpdateInput>
  }

  /**
   * WorkflowRunStep delete
   */
  export type WorkflowRunStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
    /**
     * Filter which WorkflowRunStep to delete.
     */
    where: WorkflowRunStepWhereUniqueInput
  }

  /**
   * WorkflowRunStep deleteMany
   */
  export type WorkflowRunStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowRunSteps to delete
     */
    where?: WorkflowRunStepWhereInput
    /**
     * Limit how many WorkflowRunSteps to delete.
     */
    limit?: number
  }

  /**
   * WorkflowRunStep without action
   */
  export type WorkflowRunStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRunStep
     */
    select?: WorkflowRunStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRunStep
     */
    omit?: WorkflowRunStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunStepInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    id: number | null
    workflowRunId: number | null
  }

  export type AssetSumAggregateOutputType = {
    id: bigint | null
    workflowRunId: bigint | null
  }

  export type AssetMinAggregateOutputType = {
    id: bigint | null
    workflowRunId: bigint | null
    type: $Enums.AssetType | null
    bucket: string | null
    objectKey: string | null
    publicUrl: string | null
    createdAt: Date | null
  }

  export type AssetMaxAggregateOutputType = {
    id: bigint | null
    workflowRunId: bigint | null
    type: $Enums.AssetType | null
    bucket: string | null
    objectKey: string | null
    publicUrl: string | null
    createdAt: Date | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    workflowRunId: number
    type: number
    bucket: number
    objectKey: number
    publicUrl: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    id?: true
    workflowRunId?: true
  }

  export type AssetSumAggregateInputType = {
    id?: true
    workflowRunId?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    workflowRunId?: true
    type?: true
    bucket?: true
    objectKey?: true
    publicUrl?: true
    createdAt?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    workflowRunId?: true
    type?: true
    bucket?: true
    objectKey?: true
    publicUrl?: true
    createdAt?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    workflowRunId?: true
    type?: true
    bucket?: true
    objectKey?: true
    publicUrl?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: bigint
    workflowRunId: bigint | null
    type: $Enums.AssetType
    bucket: string
    objectKey: string
    publicUrl: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowRunId?: boolean
    type?: boolean
    bucket?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    metadata?: boolean
    createdAt?: boolean
    run?: boolean | Asset$runArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>



  export type AssetSelectScalar = {
    id?: boolean
    workflowRunId?: boolean
    type?: boolean
    bucket?: boolean
    objectKey?: boolean
    publicUrl?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowRunId" | "type" | "bucket" | "objectKey" | "publicUrl" | "metadata" | "createdAt", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | Asset$runArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      run: Prisma.$WorkflowRunPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      workflowRunId: bigint | null
      type: $Enums.AssetType
      bucket: string
      objectKey: string
      publicUrl: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends Asset$runArgs<ExtArgs> = {}>(args?: Subset<T, Asset$runArgs<ExtArgs>>): Prisma__WorkflowRunClient<$Result.GetResult<Prisma.$WorkflowRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'BigInt'>
    readonly workflowRunId: FieldRef<"Asset", 'BigInt'>
    readonly type: FieldRef<"Asset", 'AssetType'>
    readonly bucket: FieldRef<"Asset", 'String'>
    readonly objectKey: FieldRef<"Asset", 'String'>
    readonly publicUrl: FieldRef<"Asset", 'String'>
    readonly metadata: FieldRef<"Asset", 'Json'>
    readonly createdAt: FieldRef<"Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.run
   */
  export type Asset$runArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowRun
     */
    select?: WorkflowRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowRun
     */
    omit?: WorkflowRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowRunInclude<ExtArgs> | null
    where?: WorkflowRunWhereInput
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentProfile
   */

  export type AggregateEnvironmentProfile = {
    _count: EnvironmentProfileCountAggregateOutputType | null
    _avg: EnvironmentProfileAvgAggregateOutputType | null
    _sum: EnvironmentProfileSumAggregateOutputType | null
    _min: EnvironmentProfileMinAggregateOutputType | null
    _max: EnvironmentProfileMaxAggregateOutputType | null
  }

  export type EnvironmentProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EnvironmentProfileSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type EnvironmentProfileMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentProfileMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    isActive: number
    variablesJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnvironmentProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EnvironmentProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EnvironmentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isActive?: true
    variablesJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnvironmentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentProfile to aggregate.
     */
    where?: EnvironmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentProfiles to fetch.
     */
    orderBy?: EnvironmentProfileOrderByWithRelationInput | EnvironmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentProfiles
    **/
    _count?: true | EnvironmentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnvironmentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnvironmentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentProfileMaxAggregateInputType
  }

  export type GetEnvironmentProfileAggregateType<T extends EnvironmentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentProfile[P]>
      : GetScalarType<T[P], AggregateEnvironmentProfile[P]>
  }




  export type EnvironmentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentProfileWhereInput
    orderBy?: EnvironmentProfileOrderByWithAggregationInput | EnvironmentProfileOrderByWithAggregationInput[]
    by: EnvironmentProfileScalarFieldEnum[] | EnvironmentProfileScalarFieldEnum
    having?: EnvironmentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentProfileCountAggregateInputType | true
    _avg?: EnvironmentProfileAvgAggregateInputType
    _sum?: EnvironmentProfileSumAggregateInputType
    _min?: EnvironmentProfileMinAggregateInputType
    _max?: EnvironmentProfileMaxAggregateInputType
  }

  export type EnvironmentProfileGroupByOutputType = {
    id: bigint
    userId: bigint
    name: string
    isActive: boolean
    variablesJson: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: EnvironmentProfileCountAggregateOutputType | null
    _avg: EnvironmentProfileAvgAggregateOutputType | null
    _sum: EnvironmentProfileSumAggregateOutputType | null
    _min: EnvironmentProfileMinAggregateOutputType | null
    _max: EnvironmentProfileMaxAggregateOutputType | null
  }

  type GetEnvironmentProfileGroupByPayload<T extends EnvironmentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentProfileGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    variablesJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentProfile"]>



  export type EnvironmentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    isActive?: boolean
    variablesJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnvironmentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "isActive" | "variablesJson" | "createdAt" | "updatedAt", ExtArgs["result"]["environmentProfile"]>
  export type EnvironmentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnvironmentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      name: string
      isActive: boolean
      variablesJson: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["environmentProfile"]>
    composites: {}
  }

  type EnvironmentProfileGetPayload<S extends boolean | null | undefined | EnvironmentProfileDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentProfilePayload, S>

  type EnvironmentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentProfileCountAggregateInputType | true
    }

  export interface EnvironmentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentProfile'], meta: { name: 'EnvironmentProfile' } }
    /**
     * Find zero or one EnvironmentProfile that matches the filter.
     * @param {EnvironmentProfileFindUniqueArgs} args - Arguments to find a EnvironmentProfile
     * @example
     * // Get one EnvironmentProfile
     * const environmentProfile = await prisma.environmentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentProfileFindUniqueArgs>(args: SelectSubset<T, EnvironmentProfileFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnvironmentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentProfileFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentProfile
     * @example
     * // Get one EnvironmentProfile
     * const environmentProfile = await prisma.environmentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentProfileFindFirstArgs} args - Arguments to find a EnvironmentProfile
     * @example
     * // Get one EnvironmentProfile
     * const environmentProfile = await prisma.environmentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentProfileFindFirstArgs>(args?: SelectSubset<T, EnvironmentProfileFindFirstArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentProfileFindFirstOrThrowArgs} args - Arguments to find a EnvironmentProfile
     * @example
     * // Get one EnvironmentProfile
     * const environmentProfile = await prisma.environmentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnvironmentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentProfiles
     * const environmentProfiles = await prisma.environmentProfile.findMany()
     * 
     * // Get first 10 EnvironmentProfiles
     * const environmentProfiles = await prisma.environmentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentProfileWithIdOnly = await prisma.environmentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentProfileFindManyArgs>(args?: SelectSubset<T, EnvironmentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnvironmentProfile.
     * @param {EnvironmentProfileCreateArgs} args - Arguments to create a EnvironmentProfile.
     * @example
     * // Create one EnvironmentProfile
     * const EnvironmentProfile = await prisma.environmentProfile.create({
     *   data: {
     *     // ... data to create a EnvironmentProfile
     *   }
     * })
     * 
     */
    create<T extends EnvironmentProfileCreateArgs>(args: SelectSubset<T, EnvironmentProfileCreateArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnvironmentProfiles.
     * @param {EnvironmentProfileCreateManyArgs} args - Arguments to create many EnvironmentProfiles.
     * @example
     * // Create many EnvironmentProfiles
     * const environmentProfile = await prisma.environmentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentProfileCreateManyArgs>(args?: SelectSubset<T, EnvironmentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EnvironmentProfile.
     * @param {EnvironmentProfileDeleteArgs} args - Arguments to delete one EnvironmentProfile.
     * @example
     * // Delete one EnvironmentProfile
     * const EnvironmentProfile = await prisma.environmentProfile.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentProfile
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentProfileDeleteArgs>(args: SelectSubset<T, EnvironmentProfileDeleteArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnvironmentProfile.
     * @param {EnvironmentProfileUpdateArgs} args - Arguments to update one EnvironmentProfile.
     * @example
     * // Update one EnvironmentProfile
     * const environmentProfile = await prisma.environmentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentProfileUpdateArgs>(args: SelectSubset<T, EnvironmentProfileUpdateArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnvironmentProfiles.
     * @param {EnvironmentProfileDeleteManyArgs} args - Arguments to filter EnvironmentProfiles to delete.
     * @example
     * // Delete a few EnvironmentProfiles
     * const { count } = await prisma.environmentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentProfileDeleteManyArgs>(args?: SelectSubset<T, EnvironmentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentProfiles
     * const environmentProfile = await prisma.environmentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentProfileUpdateManyArgs>(args: SelectSubset<T, EnvironmentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EnvironmentProfile.
     * @param {EnvironmentProfileUpsertArgs} args - Arguments to update or create a EnvironmentProfile.
     * @example
     * // Update or create a EnvironmentProfile
     * const environmentProfile = await prisma.environmentProfile.upsert({
     *   create: {
     *     // ... data to create a EnvironmentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentProfile we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentProfileUpsertArgs>(args: SelectSubset<T, EnvironmentProfileUpsertArgs<ExtArgs>>): Prisma__EnvironmentProfileClient<$Result.GetResult<Prisma.$EnvironmentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnvironmentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentProfileCountArgs} args - Arguments to filter EnvironmentProfiles to count.
     * @example
     * // Count the number of EnvironmentProfiles
     * const count = await prisma.environmentProfile.count({
     *   where: {
     *     // ... the filter for the EnvironmentProfiles we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentProfileCountArgs>(
      args?: Subset<T, EnvironmentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentProfileAggregateArgs>(args: Subset<T, EnvironmentProfileAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentProfileAggregateType<T>>

    /**
     * Group by EnvironmentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentProfileGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentProfile model
   */
  readonly fields: EnvironmentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnvironmentProfile model
   */
  interface EnvironmentProfileFieldRefs {
    readonly id: FieldRef<"EnvironmentProfile", 'BigInt'>
    readonly userId: FieldRef<"EnvironmentProfile", 'BigInt'>
    readonly name: FieldRef<"EnvironmentProfile", 'String'>
    readonly isActive: FieldRef<"EnvironmentProfile", 'Boolean'>
    readonly variablesJson: FieldRef<"EnvironmentProfile", 'Json'>
    readonly createdAt: FieldRef<"EnvironmentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"EnvironmentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentProfile findUnique
   */
  export type EnvironmentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentProfile to fetch.
     */
    where: EnvironmentProfileWhereUniqueInput
  }

  /**
   * EnvironmentProfile findUniqueOrThrow
   */
  export type EnvironmentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentProfile to fetch.
     */
    where: EnvironmentProfileWhereUniqueInput
  }

  /**
   * EnvironmentProfile findFirst
   */
  export type EnvironmentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentProfile to fetch.
     */
    where?: EnvironmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentProfiles to fetch.
     */
    orderBy?: EnvironmentProfileOrderByWithRelationInput | EnvironmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentProfiles.
     */
    cursor?: EnvironmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentProfiles.
     */
    distinct?: EnvironmentProfileScalarFieldEnum | EnvironmentProfileScalarFieldEnum[]
  }

  /**
   * EnvironmentProfile findFirstOrThrow
   */
  export type EnvironmentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentProfile to fetch.
     */
    where?: EnvironmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentProfiles to fetch.
     */
    orderBy?: EnvironmentProfileOrderByWithRelationInput | EnvironmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentProfiles.
     */
    cursor?: EnvironmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentProfiles.
     */
    distinct?: EnvironmentProfileScalarFieldEnum | EnvironmentProfileScalarFieldEnum[]
  }

  /**
   * EnvironmentProfile findMany
   */
  export type EnvironmentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentProfiles to fetch.
     */
    where?: EnvironmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentProfiles to fetch.
     */
    orderBy?: EnvironmentProfileOrderByWithRelationInput | EnvironmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentProfiles.
     */
    cursor?: EnvironmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentProfiles.
     */
    skip?: number
    distinct?: EnvironmentProfileScalarFieldEnum | EnvironmentProfileScalarFieldEnum[]
  }

  /**
   * EnvironmentProfile create
   */
  export type EnvironmentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentProfile.
     */
    data: XOR<EnvironmentProfileCreateInput, EnvironmentProfileUncheckedCreateInput>
  }

  /**
   * EnvironmentProfile createMany
   */
  export type EnvironmentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentProfiles.
     */
    data: EnvironmentProfileCreateManyInput | EnvironmentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentProfile update
   */
  export type EnvironmentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentProfile.
     */
    data: XOR<EnvironmentProfileUpdateInput, EnvironmentProfileUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentProfile to update.
     */
    where: EnvironmentProfileWhereUniqueInput
  }

  /**
   * EnvironmentProfile updateMany
   */
  export type EnvironmentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentProfiles.
     */
    data: XOR<EnvironmentProfileUpdateManyMutationInput, EnvironmentProfileUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentProfiles to update
     */
    where?: EnvironmentProfileWhereInput
    /**
     * Limit how many EnvironmentProfiles to update.
     */
    limit?: number
  }

  /**
   * EnvironmentProfile upsert
   */
  export type EnvironmentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentProfile to update in case it exists.
     */
    where: EnvironmentProfileWhereUniqueInput
    /**
     * In case the EnvironmentProfile found by the `where` argument doesn't exist, create a new EnvironmentProfile with this data.
     */
    create: XOR<EnvironmentProfileCreateInput, EnvironmentProfileUncheckedCreateInput>
    /**
     * In case the EnvironmentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentProfileUpdateInput, EnvironmentProfileUncheckedUpdateInput>
  }

  /**
   * EnvironmentProfile delete
   */
  export type EnvironmentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
    /**
     * Filter which EnvironmentProfile to delete.
     */
    where: EnvironmentProfileWhereUniqueInput
  }

  /**
   * EnvironmentProfile deleteMany
   */
  export type EnvironmentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentProfiles to delete
     */
    where?: EnvironmentProfileWhereInput
    /**
     * Limit how many EnvironmentProfiles to delete.
     */
    limit?: number
  }

  /**
   * EnvironmentProfile without action
   */
  export type EnvironmentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentProfile
     */
    select?: EnvironmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentProfile
     */
    omit?: EnvironmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentProfileInclude<ExtArgs> | null
  }


  /**
   * Model ReviewNote
   */

  export type AggregateReviewNote = {
    _count: ReviewNoteCountAggregateOutputType | null
    _avg: ReviewNoteAvgAggregateOutputType | null
    _sum: ReviewNoteSumAggregateOutputType | null
    _min: ReviewNoteMinAggregateOutputType | null
    _max: ReviewNoteMaxAggregateOutputType | null
  }

  export type ReviewNoteAvgAggregateOutputType = {
    id: number | null
    workflowId: number | null
    runId: number | null
    authorUserId: number | null
  }

  export type ReviewNoteSumAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    runId: bigint | null
    authorUserId: bigint | null
  }

  export type ReviewNoteMinAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    runId: bigint | null
    authorUserId: bigint | null
    sourceModel: string | null
    severity: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ReviewNoteMaxAggregateOutputType = {
    id: bigint | null
    workflowId: bigint | null
    runId: bigint | null
    authorUserId: bigint | null
    sourceModel: string | null
    severity: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ReviewNoteCountAggregateOutputType = {
    id: number
    workflowId: number
    runId: number
    authorUserId: number
    sourceModel: number
    severity: number
    content: number
    createdAt: number
    _all: number
  }


  export type ReviewNoteAvgAggregateInputType = {
    id?: true
    workflowId?: true
    runId?: true
    authorUserId?: true
  }

  export type ReviewNoteSumAggregateInputType = {
    id?: true
    workflowId?: true
    runId?: true
    authorUserId?: true
  }

  export type ReviewNoteMinAggregateInputType = {
    id?: true
    workflowId?: true
    runId?: true
    authorUserId?: true
    sourceModel?: true
    severity?: true
    content?: true
    createdAt?: true
  }

  export type ReviewNoteMaxAggregateInputType = {
    id?: true
    workflowId?: true
    runId?: true
    authorUserId?: true
    sourceModel?: true
    severity?: true
    content?: true
    createdAt?: true
  }

  export type ReviewNoteCountAggregateInputType = {
    id?: true
    workflowId?: true
    runId?: true
    authorUserId?: true
    sourceModel?: true
    severity?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewNote to aggregate.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewNotes
    **/
    _count?: true | ReviewNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewNoteMaxAggregateInputType
  }

  export type GetReviewNoteAggregateType<T extends ReviewNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewNote[P]>
      : GetScalarType<T[P], AggregateReviewNote[P]>
  }




  export type ReviewNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewNoteWhereInput
    orderBy?: ReviewNoteOrderByWithAggregationInput | ReviewNoteOrderByWithAggregationInput[]
    by: ReviewNoteScalarFieldEnum[] | ReviewNoteScalarFieldEnum
    having?: ReviewNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewNoteCountAggregateInputType | true
    _avg?: ReviewNoteAvgAggregateInputType
    _sum?: ReviewNoteSumAggregateInputType
    _min?: ReviewNoteMinAggregateInputType
    _max?: ReviewNoteMaxAggregateInputType
  }

  export type ReviewNoteGroupByOutputType = {
    id: bigint
    workflowId: bigint | null
    runId: bigint | null
    authorUserId: bigint | null
    sourceModel: string | null
    severity: string
    content: string
    createdAt: Date
    _count: ReviewNoteCountAggregateOutputType | null
    _avg: ReviewNoteAvgAggregateOutputType | null
    _sum: ReviewNoteSumAggregateOutputType | null
    _min: ReviewNoteMinAggregateOutputType | null
    _max: ReviewNoteMaxAggregateOutputType | null
  }

  type GetReviewNoteGroupByPayload<T extends ReviewNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewNoteGroupByOutputType[P]>
        }
      >
    >


  export type ReviewNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    runId?: boolean
    authorUserId?: boolean
    sourceModel?: boolean
    severity?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | ReviewNote$userArgs<ExtArgs>
  }, ExtArgs["result"]["reviewNote"]>



  export type ReviewNoteSelectScalar = {
    id?: boolean
    workflowId?: boolean
    runId?: boolean
    authorUserId?: boolean
    sourceModel?: boolean
    severity?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ReviewNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "runId" | "authorUserId" | "sourceModel" | "severity" | "content" | "createdAt", ExtArgs["result"]["reviewNote"]>
  export type ReviewNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ReviewNote$userArgs<ExtArgs>
  }

  export type $ReviewNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewNote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      workflowId: bigint | null
      runId: bigint | null
      authorUserId: bigint | null
      sourceModel: string | null
      severity: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["reviewNote"]>
    composites: {}
  }

  type ReviewNoteGetPayload<S extends boolean | null | undefined | ReviewNoteDefaultArgs> = $Result.GetResult<Prisma.$ReviewNotePayload, S>

  type ReviewNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewNoteCountAggregateInputType | true
    }

  export interface ReviewNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewNote'], meta: { name: 'ReviewNote' } }
    /**
     * Find zero or one ReviewNote that matches the filter.
     * @param {ReviewNoteFindUniqueArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewNoteFindUniqueArgs>(args: SelectSubset<T, ReviewNoteFindUniqueArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewNoteFindUniqueOrThrowArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindFirstArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewNoteFindFirstArgs>(args?: SelectSubset<T, ReviewNoteFindFirstArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindFirstOrThrowArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewNotes
     * const reviewNotes = await prisma.reviewNote.findMany()
     * 
     * // Get first 10 ReviewNotes
     * const reviewNotes = await prisma.reviewNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewNoteWithIdOnly = await prisma.reviewNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewNoteFindManyArgs>(args?: SelectSubset<T, ReviewNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewNote.
     * @param {ReviewNoteCreateArgs} args - Arguments to create a ReviewNote.
     * @example
     * // Create one ReviewNote
     * const ReviewNote = await prisma.reviewNote.create({
     *   data: {
     *     // ... data to create a ReviewNote
     *   }
     * })
     * 
     */
    create<T extends ReviewNoteCreateArgs>(args: SelectSubset<T, ReviewNoteCreateArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewNotes.
     * @param {ReviewNoteCreateManyArgs} args - Arguments to create many ReviewNotes.
     * @example
     * // Create many ReviewNotes
     * const reviewNote = await prisma.reviewNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewNoteCreateManyArgs>(args?: SelectSubset<T, ReviewNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewNote.
     * @param {ReviewNoteDeleteArgs} args - Arguments to delete one ReviewNote.
     * @example
     * // Delete one ReviewNote
     * const ReviewNote = await prisma.reviewNote.delete({
     *   where: {
     *     // ... filter to delete one ReviewNote
     *   }
     * })
     * 
     */
    delete<T extends ReviewNoteDeleteArgs>(args: SelectSubset<T, ReviewNoteDeleteArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewNote.
     * @param {ReviewNoteUpdateArgs} args - Arguments to update one ReviewNote.
     * @example
     * // Update one ReviewNote
     * const reviewNote = await prisma.reviewNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewNoteUpdateArgs>(args: SelectSubset<T, ReviewNoteUpdateArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewNotes.
     * @param {ReviewNoteDeleteManyArgs} args - Arguments to filter ReviewNotes to delete.
     * @example
     * // Delete a few ReviewNotes
     * const { count } = await prisma.reviewNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewNoteDeleteManyArgs>(args?: SelectSubset<T, ReviewNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewNotes
     * const reviewNote = await prisma.reviewNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewNoteUpdateManyArgs>(args: SelectSubset<T, ReviewNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewNote.
     * @param {ReviewNoteUpsertArgs} args - Arguments to update or create a ReviewNote.
     * @example
     * // Update or create a ReviewNote
     * const reviewNote = await prisma.reviewNote.upsert({
     *   create: {
     *     // ... data to create a ReviewNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewNote we want to update
     *   }
     * })
     */
    upsert<T extends ReviewNoteUpsertArgs>(args: SelectSubset<T, ReviewNoteUpsertArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteCountArgs} args - Arguments to filter ReviewNotes to count.
     * @example
     * // Count the number of ReviewNotes
     * const count = await prisma.reviewNote.count({
     *   where: {
     *     // ... the filter for the ReviewNotes we want to count
     *   }
     * })
    **/
    count<T extends ReviewNoteCountArgs>(
      args?: Subset<T, ReviewNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewNoteAggregateArgs>(args: Subset<T, ReviewNoteAggregateArgs>): Prisma.PrismaPromise<GetReviewNoteAggregateType<T>>

    /**
     * Group by ReviewNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewNoteGroupByArgs['orderBy'] }
        : { orderBy?: ReviewNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewNote model
   */
  readonly fields: ReviewNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ReviewNote$userArgs<ExtArgs> = {}>(args?: Subset<T, ReviewNote$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewNote model
   */
  interface ReviewNoteFieldRefs {
    readonly id: FieldRef<"ReviewNote", 'BigInt'>
    readonly workflowId: FieldRef<"ReviewNote", 'BigInt'>
    readonly runId: FieldRef<"ReviewNote", 'BigInt'>
    readonly authorUserId: FieldRef<"ReviewNote", 'BigInt'>
    readonly sourceModel: FieldRef<"ReviewNote", 'String'>
    readonly severity: FieldRef<"ReviewNote", 'String'>
    readonly content: FieldRef<"ReviewNote", 'String'>
    readonly createdAt: FieldRef<"ReviewNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewNote findUnique
   */
  export type ReviewNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote findUniqueOrThrow
   */
  export type ReviewNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote findFirst
   */
  export type ReviewNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewNotes.
     */
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote findFirstOrThrow
   */
  export type ReviewNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewNotes.
     */
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote findMany
   */
  export type ReviewNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNotes to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote create
   */
  export type ReviewNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewNote.
     */
    data: XOR<ReviewNoteCreateInput, ReviewNoteUncheckedCreateInput>
  }

  /**
   * ReviewNote createMany
   */
  export type ReviewNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewNotes.
     */
    data: ReviewNoteCreateManyInput | ReviewNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewNote update
   */
  export type ReviewNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewNote.
     */
    data: XOR<ReviewNoteUpdateInput, ReviewNoteUncheckedUpdateInput>
    /**
     * Choose, which ReviewNote to update.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote updateMany
   */
  export type ReviewNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewNotes.
     */
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyInput>
    /**
     * Filter which ReviewNotes to update
     */
    where?: ReviewNoteWhereInput
    /**
     * Limit how many ReviewNotes to update.
     */
    limit?: number
  }

  /**
   * ReviewNote upsert
   */
  export type ReviewNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewNote to update in case it exists.
     */
    where: ReviewNoteWhereUniqueInput
    /**
     * In case the ReviewNote found by the `where` argument doesn't exist, create a new ReviewNote with this data.
     */
    create: XOR<ReviewNoteCreateInput, ReviewNoteUncheckedCreateInput>
    /**
     * In case the ReviewNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewNoteUpdateInput, ReviewNoteUncheckedUpdateInput>
  }

  /**
   * ReviewNote delete
   */
  export type ReviewNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter which ReviewNote to delete.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote deleteMany
   */
  export type ReviewNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewNotes to delete
     */
    where?: ReviewNoteWhereInput
    /**
     * Limit how many ReviewNotes to delete.
     */
    limit?: number
  }

  /**
   * ReviewNote.user
   */
  export type ReviewNote$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ReviewNote without action
   */
  export type ReviewNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    displayName: 'displayName',
    locale: 'locale',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthIdentityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerUserId: 'providerUserId',
    createdAt: 'createdAt'
  };

  export type AuthIdentityScalarFieldEnum = (typeof AuthIdentityScalarFieldEnum)[keyof typeof AuthIdentityScalarFieldEnum]


  export const ProviderAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    protocol: 'protocol',
    isDefault: 'isDefault',
    baseUrl: 'baseUrl',
    encryptedApiKey: 'encryptedApiKey',
    defaultModel: 'defaultModel',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderAccountScalarFieldEnum = (typeof ProviderAccountScalarFieldEnum)[keyof typeof ProviderAccountScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    ownerUserId: 'ownerUserId',
    slug: 'slug',
    name: 'name',
    status: 'status',
    latestVersionNo: 'latestVersionNo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowVersionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    versionNo: 'versionNo',
    graph: 'graph',
    changelog: 'changelog',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type WorkflowVersionScalarFieldEnum = (typeof WorkflowVersionScalarFieldEnum)[keyof typeof WorkflowVersionScalarFieldEnum]


  export const WorkflowRunScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    workflowVersionId: 'workflowVersionId',
    triggerType: 'triggerType',
    status: 'status',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    errorMessage: 'errorMessage',
    logs: 'logs',
    metadata: 'metadata',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type WorkflowRunScalarFieldEnum = (typeof WorkflowRunScalarFieldEnum)[keyof typeof WorkflowRunScalarFieldEnum]


  export const WorkflowRunStepScalarFieldEnum: {
    id: 'id',
    workflowRunId: 'workflowRunId',
    nodeId: 'nodeId',
    nodeType: 'nodeType',
    status: 'status',
    attempts: 'attempts',
    input: 'input',
    output: 'output',
    errorMessage: 'errorMessage',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    createdAt: 'createdAt'
  };

  export type WorkflowRunStepScalarFieldEnum = (typeof WorkflowRunStepScalarFieldEnum)[keyof typeof WorkflowRunStepScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    workflowRunId: 'workflowRunId',
    type: 'type',
    bucket: 'bucket',
    objectKey: 'objectKey',
    publicUrl: 'publicUrl',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const EnvironmentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    isActive: 'isActive',
    variablesJson: 'variablesJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnvironmentProfileScalarFieldEnum = (typeof EnvironmentProfileScalarFieldEnum)[keyof typeof EnvironmentProfileScalarFieldEnum]


  export const ReviewNoteScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    runId: 'runId',
    authorUserId: 'authorUserId',
    sourceModel: 'sourceModel',
    severity: 'severity',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ReviewNoteScalarFieldEnum = (typeof ReviewNoteScalarFieldEnum)[keyof typeof ReviewNoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    displayName: 'displayName',
    locale: 'locale'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AuthIdentityOrderByRelevanceFieldEnum: {
    provider: 'provider',
    providerUserId: 'providerUserId'
  };

  export type AuthIdentityOrderByRelevanceFieldEnum = (typeof AuthIdentityOrderByRelevanceFieldEnum)[keyof typeof AuthIdentityOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ProviderAccountOrderByRelevanceFieldEnum: {
    name: 'name',
    baseUrl: 'baseUrl',
    encryptedApiKey: 'encryptedApiKey',
    defaultModel: 'defaultModel'
  };

  export type ProviderAccountOrderByRelevanceFieldEnum = (typeof ProviderAccountOrderByRelevanceFieldEnum)[keyof typeof ProviderAccountOrderByRelevanceFieldEnum]


  export const WorkflowOrderByRelevanceFieldEnum: {
    slug: 'slug',
    name: 'name'
  };

  export type WorkflowOrderByRelevanceFieldEnum = (typeof WorkflowOrderByRelevanceFieldEnum)[keyof typeof WorkflowOrderByRelevanceFieldEnum]


  export const WorkflowVersionOrderByRelevanceFieldEnum: {
    changelog: 'changelog'
  };

  export type WorkflowVersionOrderByRelevanceFieldEnum = (typeof WorkflowVersionOrderByRelevanceFieldEnum)[keyof typeof WorkflowVersionOrderByRelevanceFieldEnum]


  export const WorkflowRunOrderByRelevanceFieldEnum: {
    triggerType: 'triggerType',
    errorMessage: 'errorMessage'
  };

  export type WorkflowRunOrderByRelevanceFieldEnum = (typeof WorkflowRunOrderByRelevanceFieldEnum)[keyof typeof WorkflowRunOrderByRelevanceFieldEnum]


  export const WorkflowRunStepOrderByRelevanceFieldEnum: {
    nodeId: 'nodeId',
    nodeType: 'nodeType',
    errorMessage: 'errorMessage'
  };

  export type WorkflowRunStepOrderByRelevanceFieldEnum = (typeof WorkflowRunStepOrderByRelevanceFieldEnum)[keyof typeof WorkflowRunStepOrderByRelevanceFieldEnum]


  export const AssetOrderByRelevanceFieldEnum: {
    bucket: 'bucket',
    objectKey: 'objectKey',
    publicUrl: 'publicUrl'
  };

  export type AssetOrderByRelevanceFieldEnum = (typeof AssetOrderByRelevanceFieldEnum)[keyof typeof AssetOrderByRelevanceFieldEnum]


  export const EnvironmentProfileOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type EnvironmentProfileOrderByRelevanceFieldEnum = (typeof EnvironmentProfileOrderByRelevanceFieldEnum)[keyof typeof EnvironmentProfileOrderByRelevanceFieldEnum]


  export const ReviewNoteOrderByRelevanceFieldEnum: {
    sourceModel: 'sourceModel',
    severity: 'severity',
    content: 'content'
  };

  export type ReviewNoteOrderByRelevanceFieldEnum = (typeof ReviewNoteOrderByRelevanceFieldEnum)[keyof typeof ReviewNoteOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ProviderType'
   */
  export type EnumProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderType'>
    


  /**
   * Reference to a field of type 'ProviderProtocol'
   */
  export type EnumProviderProtocolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderProtocol'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'WorkflowStatus'
   */
  export type EnumWorkflowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'WorkflowRunStatus'
   */
  export type EnumWorkflowRunStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowRunStatus'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    locale?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    authIdentities?: AuthIdentityListRelationFilter
    providerAccounts?: ProviderAccountListRelationFilter
    workflows?: WorkflowListRelationFilter
    workflowRuns?: WorkflowRunListRelationFilter
    environmentProfiles?: EnvironmentProfileListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    locale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authIdentities?: AuthIdentityOrderByRelationAggregateInput
    providerAccounts?: ProviderAccountOrderByRelationAggregateInput
    workflows?: WorkflowOrderByRelationAggregateInput
    workflowRuns?: WorkflowRunOrderByRelationAggregateInput
    environmentProfiles?: EnvironmentProfileOrderByRelationAggregateInput
    reviewNotes?: ReviewNoteOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    locale?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    authIdentities?: AuthIdentityListRelationFilter
    providerAccounts?: ProviderAccountListRelationFilter
    workflows?: WorkflowListRelationFilter
    workflowRuns?: WorkflowRunListRelationFilter
    environmentProfiles?: EnvironmentProfileListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    locale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    locale?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AuthIdentityWhereInput = {
    AND?: AuthIdentityWhereInput | AuthIdentityWhereInput[]
    OR?: AuthIdentityWhereInput[]
    NOT?: AuthIdentityWhereInput | AuthIdentityWhereInput[]
    id?: BigIntFilter<"AuthIdentity"> | bigint | number
    userId?: BigIntFilter<"AuthIdentity"> | bigint | number
    provider?: StringFilter<"AuthIdentity"> | string
    providerUserId?: StringFilter<"AuthIdentity"> | string
    createdAt?: DateTimeFilter<"AuthIdentity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthIdentityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuthIdentityOrderByRelevanceInput
  }

  export type AuthIdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    provider_providerUserId?: AuthIdentityProviderProviderUserIdCompoundUniqueInput
    AND?: AuthIdentityWhereInput | AuthIdentityWhereInput[]
    OR?: AuthIdentityWhereInput[]
    NOT?: AuthIdentityWhereInput | AuthIdentityWhereInput[]
    userId?: BigIntFilter<"AuthIdentity"> | bigint | number
    provider?: StringFilter<"AuthIdentity"> | string
    providerUserId?: StringFilter<"AuthIdentity"> | string
    createdAt?: DateTimeFilter<"AuthIdentity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerUserId">

  export type AuthIdentityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    createdAt?: SortOrder
    _count?: AuthIdentityCountOrderByAggregateInput
    _avg?: AuthIdentityAvgOrderByAggregateInput
    _max?: AuthIdentityMaxOrderByAggregateInput
    _min?: AuthIdentityMinOrderByAggregateInput
    _sum?: AuthIdentitySumOrderByAggregateInput
  }

  export type AuthIdentityScalarWhereWithAggregatesInput = {
    AND?: AuthIdentityScalarWhereWithAggregatesInput | AuthIdentityScalarWhereWithAggregatesInput[]
    OR?: AuthIdentityScalarWhereWithAggregatesInput[]
    NOT?: AuthIdentityScalarWhereWithAggregatesInput | AuthIdentityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AuthIdentity"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"AuthIdentity"> | bigint | number
    provider?: StringWithAggregatesFilter<"AuthIdentity"> | string
    providerUserId?: StringWithAggregatesFilter<"AuthIdentity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthIdentity"> | Date | string
  }

  export type ProviderAccountWhereInput = {
    AND?: ProviderAccountWhereInput | ProviderAccountWhereInput[]
    OR?: ProviderAccountWhereInput[]
    NOT?: ProviderAccountWhereInput | ProviderAccountWhereInput[]
    id?: BigIntFilter<"ProviderAccount"> | bigint | number
    userId?: BigIntFilter<"ProviderAccount"> | bigint | number
    name?: StringFilter<"ProviderAccount"> | string
    type?: EnumProviderTypeFilter<"ProviderAccount"> | $Enums.ProviderType
    protocol?: EnumProviderProtocolFilter<"ProviderAccount"> | $Enums.ProviderProtocol
    isDefault?: BoolFilter<"ProviderAccount"> | boolean
    baseUrl?: StringNullableFilter<"ProviderAccount"> | string | null
    encryptedApiKey?: StringFilter<"ProviderAccount"> | string
    defaultModel?: StringNullableFilter<"ProviderAccount"> | string | null
    metadata?: JsonNullableFilter<"ProviderAccount">
    createdAt?: DateTimeFilter<"ProviderAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProviderAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    isDefault?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    encryptedApiKey?: SortOrder
    defaultModel?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ProviderAccountOrderByRelevanceInput
  }

  export type ProviderAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProviderAccountWhereInput | ProviderAccountWhereInput[]
    OR?: ProviderAccountWhereInput[]
    NOT?: ProviderAccountWhereInput | ProviderAccountWhereInput[]
    userId?: BigIntFilter<"ProviderAccount"> | bigint | number
    name?: StringFilter<"ProviderAccount"> | string
    type?: EnumProviderTypeFilter<"ProviderAccount"> | $Enums.ProviderType
    protocol?: EnumProviderProtocolFilter<"ProviderAccount"> | $Enums.ProviderProtocol
    isDefault?: BoolFilter<"ProviderAccount"> | boolean
    baseUrl?: StringNullableFilter<"ProviderAccount"> | string | null
    encryptedApiKey?: StringFilter<"ProviderAccount"> | string
    defaultModel?: StringNullableFilter<"ProviderAccount"> | string | null
    metadata?: JsonNullableFilter<"ProviderAccount">
    createdAt?: DateTimeFilter<"ProviderAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProviderAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    isDefault?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    encryptedApiKey?: SortOrder
    defaultModel?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderAccountCountOrderByAggregateInput
    _avg?: ProviderAccountAvgOrderByAggregateInput
    _max?: ProviderAccountMaxOrderByAggregateInput
    _min?: ProviderAccountMinOrderByAggregateInput
    _sum?: ProviderAccountSumOrderByAggregateInput
  }

  export type ProviderAccountScalarWhereWithAggregatesInput = {
    AND?: ProviderAccountScalarWhereWithAggregatesInput | ProviderAccountScalarWhereWithAggregatesInput[]
    OR?: ProviderAccountScalarWhereWithAggregatesInput[]
    NOT?: ProviderAccountScalarWhereWithAggregatesInput | ProviderAccountScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ProviderAccount"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"ProviderAccount"> | bigint | number
    name?: StringWithAggregatesFilter<"ProviderAccount"> | string
    type?: EnumProviderTypeWithAggregatesFilter<"ProviderAccount"> | $Enums.ProviderType
    protocol?: EnumProviderProtocolWithAggregatesFilter<"ProviderAccount"> | $Enums.ProviderProtocol
    isDefault?: BoolWithAggregatesFilter<"ProviderAccount"> | boolean
    baseUrl?: StringNullableWithAggregatesFilter<"ProviderAccount"> | string | null
    encryptedApiKey?: StringWithAggregatesFilter<"ProviderAccount"> | string
    defaultModel?: StringNullableWithAggregatesFilter<"ProviderAccount"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"ProviderAccount">
    createdAt?: DateTimeWithAggregatesFilter<"ProviderAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderAccount"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: BigIntFilter<"Workflow"> | bigint | number
    ownerUserId?: BigIntFilter<"Workflow"> | bigint | number
    slug?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    latestVersionNo?: IntFilter<"Workflow"> | number
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: WorkflowVersionListRelationFilter
    runs?: WorkflowRunListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    status?: SortOrder
    latestVersionNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    versions?: WorkflowVersionOrderByRelationAggregateInput
    runs?: WorkflowRunOrderByRelationAggregateInput
    _relevance?: WorkflowOrderByRelevanceInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    slug?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    ownerUserId?: BigIntFilter<"Workflow"> | bigint | number
    name?: StringFilter<"Workflow"> | string
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    latestVersionNo?: IntFilter<"Workflow"> | number
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    versions?: WorkflowVersionListRelationFilter
    runs?: WorkflowRunListRelationFilter
  }, "id" | "slug">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    status?: SortOrder
    latestVersionNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _avg?: WorkflowAvgOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
    _sum?: WorkflowSumOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Workflow"> | bigint | number
    ownerUserId?: BigIntWithAggregatesFilter<"Workflow"> | bigint | number
    slug?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    status?: EnumWorkflowStatusWithAggregatesFilter<"Workflow"> | $Enums.WorkflowStatus
    latestVersionNo?: IntWithAggregatesFilter<"Workflow"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type WorkflowVersionWhereInput = {
    AND?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    OR?: WorkflowVersionWhereInput[]
    NOT?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    id?: BigIntFilter<"WorkflowVersion"> | bigint | number
    workflowId?: BigIntFilter<"WorkflowVersion"> | bigint | number
    versionNo?: IntFilter<"WorkflowVersion"> | number
    graph?: JsonFilter<"WorkflowVersion">
    changelog?: StringNullableFilter<"WorkflowVersion"> | string | null
    createdBy?: BigIntNullableFilter<"WorkflowVersion"> | bigint | number | null
    createdAt?: DateTimeFilter<"WorkflowVersion"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type WorkflowVersionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNo?: SortOrder
    graph?: SortOrder
    changelog?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    _relevance?: WorkflowVersionOrderByRelevanceInput
  }

  export type WorkflowVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    workflowId_versionNo?: WorkflowVersionWorkflowIdVersionNoCompoundUniqueInput
    AND?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    OR?: WorkflowVersionWhereInput[]
    NOT?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    workflowId?: BigIntFilter<"WorkflowVersion"> | bigint | number
    versionNo?: IntFilter<"WorkflowVersion"> | number
    graph?: JsonFilter<"WorkflowVersion">
    changelog?: StringNullableFilter<"WorkflowVersion"> | string | null
    createdBy?: BigIntNullableFilter<"WorkflowVersion"> | bigint | number | null
    createdAt?: DateTimeFilter<"WorkflowVersion"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id" | "workflowId_versionNo">

  export type WorkflowVersionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNo?: SortOrder
    graph?: SortOrder
    changelog?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkflowVersionCountOrderByAggregateInput
    _avg?: WorkflowVersionAvgOrderByAggregateInput
    _max?: WorkflowVersionMaxOrderByAggregateInput
    _min?: WorkflowVersionMinOrderByAggregateInput
    _sum?: WorkflowVersionSumOrderByAggregateInput
  }

  export type WorkflowVersionScalarWhereWithAggregatesInput = {
    AND?: WorkflowVersionScalarWhereWithAggregatesInput | WorkflowVersionScalarWhereWithAggregatesInput[]
    OR?: WorkflowVersionScalarWhereWithAggregatesInput[]
    NOT?: WorkflowVersionScalarWhereWithAggregatesInput | WorkflowVersionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkflowVersion"> | bigint | number
    workflowId?: BigIntWithAggregatesFilter<"WorkflowVersion"> | bigint | number
    versionNo?: IntWithAggregatesFilter<"WorkflowVersion"> | number
    graph?: JsonWithAggregatesFilter<"WorkflowVersion">
    changelog?: StringNullableWithAggregatesFilter<"WorkflowVersion"> | string | null
    createdBy?: BigIntNullableWithAggregatesFilter<"WorkflowVersion"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowVersion"> | Date | string
  }

  export type WorkflowRunWhereInput = {
    AND?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    OR?: WorkflowRunWhereInput[]
    NOT?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    id?: BigIntFilter<"WorkflowRun"> | bigint | number
    workflowId?: BigIntFilter<"WorkflowRun"> | bigint | number
    workflowVersionId?: BigIntNullableFilter<"WorkflowRun"> | bigint | number | null
    triggerType?: StringFilter<"WorkflowRun"> | string
    status?: EnumWorkflowRunStatusFilter<"WorkflowRun"> | $Enums.WorkflowRunStatus
    startedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    logs?: JsonNullableFilter<"WorkflowRun">
    metadata?: JsonNullableFilter<"WorkflowRun">
    createdBy?: BigIntNullableFilter<"WorkflowRun"> | bigint | number | null
    createdAt?: DateTimeFilter<"WorkflowRun"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    steps?: WorkflowRunStepListRelationFilter
    assets?: AssetListRelationFilter
  }

  export type WorkflowRunOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    workflowVersionId?: SortOrderInput | SortOrder
    triggerType?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    logs?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    steps?: WorkflowRunStepOrderByRelationAggregateInput
    assets?: AssetOrderByRelationAggregateInput
    _relevance?: WorkflowRunOrderByRelevanceInput
  }

  export type WorkflowRunWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    OR?: WorkflowRunWhereInput[]
    NOT?: WorkflowRunWhereInput | WorkflowRunWhereInput[]
    workflowId?: BigIntFilter<"WorkflowRun"> | bigint | number
    workflowVersionId?: BigIntNullableFilter<"WorkflowRun"> | bigint | number | null
    triggerType?: StringFilter<"WorkflowRun"> | string
    status?: EnumWorkflowRunStatusFilter<"WorkflowRun"> | $Enums.WorkflowRunStatus
    startedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    logs?: JsonNullableFilter<"WorkflowRun">
    metadata?: JsonNullableFilter<"WorkflowRun">
    createdBy?: BigIntNullableFilter<"WorkflowRun"> | bigint | number | null
    createdAt?: DateTimeFilter<"WorkflowRun"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    steps?: WorkflowRunStepListRelationFilter
    assets?: AssetListRelationFilter
  }, "id">

  export type WorkflowRunOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    workflowVersionId?: SortOrderInput | SortOrder
    triggerType?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    logs?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkflowRunCountOrderByAggregateInput
    _avg?: WorkflowRunAvgOrderByAggregateInput
    _max?: WorkflowRunMaxOrderByAggregateInput
    _min?: WorkflowRunMinOrderByAggregateInput
    _sum?: WorkflowRunSumOrderByAggregateInput
  }

  export type WorkflowRunScalarWhereWithAggregatesInput = {
    AND?: WorkflowRunScalarWhereWithAggregatesInput | WorkflowRunScalarWhereWithAggregatesInput[]
    OR?: WorkflowRunScalarWhereWithAggregatesInput[]
    NOT?: WorkflowRunScalarWhereWithAggregatesInput | WorkflowRunScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkflowRun"> | bigint | number
    workflowId?: BigIntWithAggregatesFilter<"WorkflowRun"> | bigint | number
    workflowVersionId?: BigIntNullableWithAggregatesFilter<"WorkflowRun"> | bigint | number | null
    triggerType?: StringWithAggregatesFilter<"WorkflowRun"> | string
    status?: EnumWorkflowRunStatusWithAggregatesFilter<"WorkflowRun"> | $Enums.WorkflowRunStatus
    startedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowRun"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"WorkflowRun"> | string | null
    logs?: JsonNullableWithAggregatesFilter<"WorkflowRun">
    metadata?: JsonNullableWithAggregatesFilter<"WorkflowRun">
    createdBy?: BigIntNullableWithAggregatesFilter<"WorkflowRun"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowRun"> | Date | string
  }

  export type WorkflowRunStepWhereInput = {
    AND?: WorkflowRunStepWhereInput | WorkflowRunStepWhereInput[]
    OR?: WorkflowRunStepWhereInput[]
    NOT?: WorkflowRunStepWhereInput | WorkflowRunStepWhereInput[]
    id?: BigIntFilter<"WorkflowRunStep"> | bigint | number
    workflowRunId?: BigIntFilter<"WorkflowRunStep"> | bigint | number
    nodeId?: StringFilter<"WorkflowRunStep"> | string
    nodeType?: StringFilter<"WorkflowRunStep"> | string
    status?: EnumWorkflowRunStatusFilter<"WorkflowRunStep"> | $Enums.WorkflowRunStatus
    attempts?: IntFilter<"WorkflowRunStep"> | number
    input?: JsonNullableFilter<"WorkflowRunStep">
    output?: JsonNullableFilter<"WorkflowRunStep">
    errorMessage?: StringNullableFilter<"WorkflowRunStep"> | string | null
    startedAt?: DateTimeNullableFilter<"WorkflowRunStep"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRunStep"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkflowRunStep"> | Date | string
    run?: XOR<WorkflowRunScalarRelationFilter, WorkflowRunWhereInput>
  }

  export type WorkflowRunStepOrderByWithRelationInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    nodeId?: SortOrder
    nodeType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    input?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    run?: WorkflowRunOrderByWithRelationInput
    _relevance?: WorkflowRunStepOrderByRelevanceInput
  }

  export type WorkflowRunStepWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkflowRunStepWhereInput | WorkflowRunStepWhereInput[]
    OR?: WorkflowRunStepWhereInput[]
    NOT?: WorkflowRunStepWhereInput | WorkflowRunStepWhereInput[]
    workflowRunId?: BigIntFilter<"WorkflowRunStep"> | bigint | number
    nodeId?: StringFilter<"WorkflowRunStep"> | string
    nodeType?: StringFilter<"WorkflowRunStep"> | string
    status?: EnumWorkflowRunStatusFilter<"WorkflowRunStep"> | $Enums.WorkflowRunStatus
    attempts?: IntFilter<"WorkflowRunStep"> | number
    input?: JsonNullableFilter<"WorkflowRunStep">
    output?: JsonNullableFilter<"WorkflowRunStep">
    errorMessage?: StringNullableFilter<"WorkflowRunStep"> | string | null
    startedAt?: DateTimeNullableFilter<"WorkflowRunStep"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRunStep"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkflowRunStep"> | Date | string
    run?: XOR<WorkflowRunScalarRelationFilter, WorkflowRunWhereInput>
  }, "id">

  export type WorkflowRunStepOrderByWithAggregationInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    nodeId?: SortOrder
    nodeType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    input?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkflowRunStepCountOrderByAggregateInput
    _avg?: WorkflowRunStepAvgOrderByAggregateInput
    _max?: WorkflowRunStepMaxOrderByAggregateInput
    _min?: WorkflowRunStepMinOrderByAggregateInput
    _sum?: WorkflowRunStepSumOrderByAggregateInput
  }

  export type WorkflowRunStepScalarWhereWithAggregatesInput = {
    AND?: WorkflowRunStepScalarWhereWithAggregatesInput | WorkflowRunStepScalarWhereWithAggregatesInput[]
    OR?: WorkflowRunStepScalarWhereWithAggregatesInput[]
    NOT?: WorkflowRunStepScalarWhereWithAggregatesInput | WorkflowRunStepScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkflowRunStep"> | bigint | number
    workflowRunId?: BigIntWithAggregatesFilter<"WorkflowRunStep"> | bigint | number
    nodeId?: StringWithAggregatesFilter<"WorkflowRunStep"> | string
    nodeType?: StringWithAggregatesFilter<"WorkflowRunStep"> | string
    status?: EnumWorkflowRunStatusWithAggregatesFilter<"WorkflowRunStep"> | $Enums.WorkflowRunStatus
    attempts?: IntWithAggregatesFilter<"WorkflowRunStep"> | number
    input?: JsonNullableWithAggregatesFilter<"WorkflowRunStep">
    output?: JsonNullableWithAggregatesFilter<"WorkflowRunStep">
    errorMessage?: StringNullableWithAggregatesFilter<"WorkflowRunStep"> | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowRunStep"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowRunStep"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowRunStep"> | Date | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: BigIntFilter<"Asset"> | bigint | number
    workflowRunId?: BigIntNullableFilter<"Asset"> | bigint | number | null
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    bucket?: StringFilter<"Asset"> | string
    objectKey?: StringFilter<"Asset"> | string
    publicUrl?: StringNullableFilter<"Asset"> | string | null
    metadata?: JsonNullableFilter<"Asset">
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    run?: XOR<WorkflowRunNullableScalarRelationFilter, WorkflowRunWhereInput> | null
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    workflowRunId?: SortOrderInput | SortOrder
    type?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    run?: WorkflowRunOrderByWithRelationInput
    _relevance?: AssetOrderByRelevanceInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    workflowRunId?: BigIntNullableFilter<"Asset"> | bigint | number | null
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    bucket?: StringFilter<"Asset"> | string
    objectKey?: StringFilter<"Asset"> | string
    publicUrl?: StringNullableFilter<"Asset"> | string | null
    metadata?: JsonNullableFilter<"Asset">
    createdAt?: DateTimeFilter<"Asset"> | Date | string
    run?: XOR<WorkflowRunNullableScalarRelationFilter, WorkflowRunWhereInput> | null
  }, "id">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    workflowRunId?: SortOrderInput | SortOrder
    type?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Asset"> | bigint | number
    workflowRunId?: BigIntNullableWithAggregatesFilter<"Asset"> | bigint | number | null
    type?: EnumAssetTypeWithAggregatesFilter<"Asset"> | $Enums.AssetType
    bucket?: StringWithAggregatesFilter<"Asset"> | string
    objectKey?: StringWithAggregatesFilter<"Asset"> | string
    publicUrl?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Asset">
    createdAt?: DateTimeWithAggregatesFilter<"Asset"> | Date | string
  }

  export type EnvironmentProfileWhereInput = {
    AND?: EnvironmentProfileWhereInput | EnvironmentProfileWhereInput[]
    OR?: EnvironmentProfileWhereInput[]
    NOT?: EnvironmentProfileWhereInput | EnvironmentProfileWhereInput[]
    id?: BigIntFilter<"EnvironmentProfile"> | bigint | number
    userId?: BigIntFilter<"EnvironmentProfile"> | bigint | number
    name?: StringFilter<"EnvironmentProfile"> | string
    isActive?: BoolFilter<"EnvironmentProfile"> | boolean
    variablesJson?: JsonFilter<"EnvironmentProfile">
    createdAt?: DateTimeFilter<"EnvironmentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnvironmentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    variablesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: EnvironmentProfileOrderByRelevanceInput
  }

  export type EnvironmentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EnvironmentProfileWhereInput | EnvironmentProfileWhereInput[]
    OR?: EnvironmentProfileWhereInput[]
    NOT?: EnvironmentProfileWhereInput | EnvironmentProfileWhereInput[]
    userId?: BigIntFilter<"EnvironmentProfile"> | bigint | number
    name?: StringFilter<"EnvironmentProfile"> | string
    isActive?: BoolFilter<"EnvironmentProfile"> | boolean
    variablesJson?: JsonFilter<"EnvironmentProfile">
    createdAt?: DateTimeFilter<"EnvironmentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EnvironmentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    variablesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnvironmentProfileCountOrderByAggregateInput
    _avg?: EnvironmentProfileAvgOrderByAggregateInput
    _max?: EnvironmentProfileMaxOrderByAggregateInput
    _min?: EnvironmentProfileMinOrderByAggregateInput
    _sum?: EnvironmentProfileSumOrderByAggregateInput
  }

  export type EnvironmentProfileScalarWhereWithAggregatesInput = {
    AND?: EnvironmentProfileScalarWhereWithAggregatesInput | EnvironmentProfileScalarWhereWithAggregatesInput[]
    OR?: EnvironmentProfileScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentProfileScalarWhereWithAggregatesInput | EnvironmentProfileScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"EnvironmentProfile"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"EnvironmentProfile"> | bigint | number
    name?: StringWithAggregatesFilter<"EnvironmentProfile"> | string
    isActive?: BoolWithAggregatesFilter<"EnvironmentProfile"> | boolean
    variablesJson?: JsonWithAggregatesFilter<"EnvironmentProfile">
    createdAt?: DateTimeWithAggregatesFilter<"EnvironmentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnvironmentProfile"> | Date | string
  }

  export type ReviewNoteWhereInput = {
    AND?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    OR?: ReviewNoteWhereInput[]
    NOT?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    id?: BigIntFilter<"ReviewNote"> | bigint | number
    workflowId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    runId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    authorUserId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    sourceModel?: StringNullableFilter<"ReviewNote"> | string | null
    severity?: StringFilter<"ReviewNote"> | string
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ReviewNoteOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrderInput | SortOrder
    runId?: SortOrderInput | SortOrder
    authorUserId?: SortOrderInput | SortOrder
    sourceModel?: SortOrderInput | SortOrder
    severity?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ReviewNoteOrderByRelevanceInput
  }

  export type ReviewNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    OR?: ReviewNoteWhereInput[]
    NOT?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    workflowId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    runId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    authorUserId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    sourceModel?: StringNullableFilter<"ReviewNote"> | string | null
    severity?: StringFilter<"ReviewNote"> | string
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReviewNoteOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrderInput | SortOrder
    runId?: SortOrderInput | SortOrder
    authorUserId?: SortOrderInput | SortOrder
    sourceModel?: SortOrderInput | SortOrder
    severity?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewNoteCountOrderByAggregateInput
    _avg?: ReviewNoteAvgOrderByAggregateInput
    _max?: ReviewNoteMaxOrderByAggregateInput
    _min?: ReviewNoteMinOrderByAggregateInput
    _sum?: ReviewNoteSumOrderByAggregateInput
  }

  export type ReviewNoteScalarWhereWithAggregatesInput = {
    AND?: ReviewNoteScalarWhereWithAggregatesInput | ReviewNoteScalarWhereWithAggregatesInput[]
    OR?: ReviewNoteScalarWhereWithAggregatesInput[]
    NOT?: ReviewNoteScalarWhereWithAggregatesInput | ReviewNoteScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReviewNote"> | bigint | number
    workflowId?: BigIntNullableWithAggregatesFilter<"ReviewNote"> | bigint | number | null
    runId?: BigIntNullableWithAggregatesFilter<"ReviewNote"> | bigint | number | null
    authorUserId?: BigIntNullableWithAggregatesFilter<"ReviewNote"> | bigint | number | null
    sourceModel?: StringNullableWithAggregatesFilter<"ReviewNote"> | string | null
    severity?: StringWithAggregatesFilter<"ReviewNote"> | string
    content?: StringWithAggregatesFilter<"ReviewNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewNote"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityUncheckedCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunUncheckedCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileUncheckedCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUncheckedUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUncheckedUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUncheckedUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthIdentityCreateInput = {
    id?: bigint | number
    provider: string
    providerUserId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuthIdentitiesInput
  }

  export type AuthIdentityUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    provider: string
    providerUserId: string
    createdAt?: Date | string
  }

  export type AuthIdentityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthIdentitiesNestedInput
  }

  export type AuthIdentityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthIdentityCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    provider: string
    providerUserId: string
    createdAt?: Date | string
  }

  export type AuthIdentityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthIdentityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAccountCreateInput = {
    id?: bigint | number
    name: string
    type: $Enums.ProviderType
    protocol?: $Enums.ProviderProtocol
    isDefault?: boolean
    baseUrl?: string | null
    encryptedApiKey: string
    defaultModel?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProviderAccountsInput
  }

  export type ProviderAccountUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    name: string
    type: $Enums.ProviderType
    protocol?: $Enums.ProviderProtocol
    isDefault?: boolean
    baseUrl?: string | null
    encryptedApiKey: string
    defaultModel?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderAccountUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    protocol?: EnumProviderProtocolFieldUpdateOperationsInput | $Enums.ProviderProtocol
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    defaultModel?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProviderAccountsNestedInput
  }

  export type ProviderAccountUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    protocol?: EnumProviderProtocolFieldUpdateOperationsInput | $Enums.ProviderProtocol
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    defaultModel?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAccountCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    name: string
    type: $Enums.ProviderType
    protocol?: $Enums.ProviderProtocol
    isDefault?: boolean
    baseUrl?: string | null
    encryptedApiKey: string
    defaultModel?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderAccountUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    protocol?: EnumProviderProtocolFieldUpdateOperationsInput | $Enums.ProviderProtocol
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    defaultModel?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAccountUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    protocol?: EnumProviderProtocolFieldUpdateOperationsInput | $Enums.ProviderProtocol
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    defaultModel?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutWorkflowsInput
    versions?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
    runs?: WorkflowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: bigint | number
    ownerUserId: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
    runs?: WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    versions?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
    runs?: WorkflowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ownerUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
    runs?: WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: bigint | number
    ownerUserId: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ownerUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionCreateInput = {
    id?: bigint | number
    versionNo: number
    graph: JsonNullValueInput | InputJsonValue
    changelog?: string | null
    createdBy?: bigint | number | null
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutVersionsInput
  }

  export type WorkflowVersionUncheckedCreateInput = {
    id?: bigint | number
    workflowId: bigint | number
    versionNo: number
    graph: JsonNullValueInput | InputJsonValue
    changelog?: string | null
    createdBy?: bigint | number | null
    createdAt?: Date | string
  }

  export type WorkflowVersionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    versionNo?: IntFieldUpdateOperationsInput | number
    graph?: JsonNullValueInput | InputJsonValue
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type WorkflowVersionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionNo?: IntFieldUpdateOperationsInput | number
    graph?: JsonNullValueInput | InputJsonValue
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionCreateManyInput = {
    id?: bigint | number
    workflowId: bigint | number
    versionNo: number
    graph: JsonNullValueInput | InputJsonValue
    changelog?: string | null
    createdBy?: bigint | number | null
    createdAt?: Date | string
  }

  export type WorkflowVersionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    versionNo?: IntFieldUpdateOperationsInput | number
    graph?: JsonNullValueInput | InputJsonValue
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    versionNo?: IntFieldUpdateOperationsInput | number
    graph?: JsonNullValueInput | InputJsonValue
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunCreateInput = {
    id?: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutRunsInput
    creator?: UserCreateNestedOneWithoutWorkflowRunsInput
    steps?: WorkflowRunStepCreateNestedManyWithoutRunInput
    assets?: AssetCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunUncheckedCreateInput = {
    id?: bigint | number
    workflowId: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: bigint | number | null
    createdAt?: Date | string
    steps?: WorkflowRunStepUncheckedCreateNestedManyWithoutRunInput
    assets?: AssetUncheckedCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutRunsNestedInput
    creator?: UserUpdateOneWithoutWorkflowRunsNestedInput
    steps?: WorkflowRunStepUpdateManyWithoutRunNestedInput
    assets?: AssetUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowRunStepUncheckedUpdateManyWithoutRunNestedInput
    assets?: AssetUncheckedUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunCreateManyInput = {
    id?: bigint | number
    workflowId: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: bigint | number | null
    createdAt?: Date | string
  }

  export type WorkflowRunUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunStepCreateInput = {
    id?: bigint | number
    nodeId: string
    nodeType: string
    status?: $Enums.WorkflowRunStatus
    attempts?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
    run: WorkflowRunCreateNestedOneWithoutStepsInput
  }

  export type WorkflowRunStepUncheckedCreateInput = {
    id?: bigint | number
    workflowRunId: bigint | number
    nodeId: string
    nodeType: string
    status?: $Enums.WorkflowRunStatus
    attempts?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WorkflowRunStepUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nodeId?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    attempts?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: WorkflowRunUpdateOneRequiredWithoutStepsNestedInput
  }

  export type WorkflowRunStepUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowRunId?: BigIntFieldUpdateOperationsInput | bigint | number
    nodeId?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    attempts?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunStepCreateManyInput = {
    id?: bigint | number
    workflowRunId: bigint | number
    nodeId: string
    nodeType: string
    status?: $Enums.WorkflowRunStatus
    attempts?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WorkflowRunStepUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nodeId?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    attempts?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunStepUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowRunId?: BigIntFieldUpdateOperationsInput | bigint | number
    nodeId?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    attempts?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateInput = {
    id?: bigint | number
    type: $Enums.AssetType
    bucket: string
    objectKey: string
    publicUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    run?: WorkflowRunCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateInput = {
    id?: bigint | number
    workflowRunId?: bigint | number | null
    type: $Enums.AssetType
    bucket: string
    objectKey: string
    publicUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssetUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    bucket?: StringFieldUpdateOperationsInput | string
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: WorkflowRunUpdateOneWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowRunId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    bucket?: StringFieldUpdateOperationsInput | string
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateManyInput = {
    id?: bigint | number
    workflowRunId?: bigint | number | null
    type: $Enums.AssetType
    bucket: string
    objectKey: string
    publicUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssetUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    bucket?: StringFieldUpdateOperationsInput | string
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowRunId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    bucket?: StringFieldUpdateOperationsInput | string
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentProfileCreateInput = {
    id?: bigint | number
    name: string
    isActive?: boolean
    variablesJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEnvironmentProfilesInput
  }

  export type EnvironmentProfileUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    name: string
    isActive?: boolean
    variablesJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentProfileUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    variablesJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnvironmentProfilesNestedInput
  }

  export type EnvironmentProfileUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    variablesJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentProfileCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    name: string
    isActive?: boolean
    variablesJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentProfileUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    variablesJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentProfileUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    variablesJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteCreateInput = {
    id?: bigint | number
    workflowId?: bigint | number | null
    runId?: bigint | number | null
    sourceModel?: string | null
    severity?: string
    content: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutReviewNotesInput
  }

  export type ReviewNoteUncheckedCreateInput = {
    id?: bigint | number
    workflowId?: bigint | number | null
    runId?: bigint | number | null
    authorUserId?: bigint | number | null
    sourceModel?: string | null
    severity?: string
    content: string
    createdAt?: Date | string
  }

  export type ReviewNoteUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    runId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sourceModel?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutReviewNotesNestedInput
  }

  export type ReviewNoteUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    runId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    authorUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sourceModel?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteCreateManyInput = {
    id?: bigint | number
    workflowId?: bigint | number | null
    runId?: bigint | number | null
    authorUserId?: bigint | number | null
    sourceModel?: string | null
    severity?: string
    content: string
    createdAt?: Date | string
  }

  export type ReviewNoteUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    runId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sourceModel?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    runId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    authorUserId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sourceModel?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthIdentityListRelationFilter = {
    every?: AuthIdentityWhereInput
    some?: AuthIdentityWhereInput
    none?: AuthIdentityWhereInput
  }

  export type ProviderAccountListRelationFilter = {
    every?: ProviderAccountWhereInput
    some?: ProviderAccountWhereInput
    none?: ProviderAccountWhereInput
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type WorkflowRunListRelationFilter = {
    every?: WorkflowRunWhereInput
    some?: WorkflowRunWhereInput
    none?: WorkflowRunWhereInput
  }

  export type EnvironmentProfileListRelationFilter = {
    every?: EnvironmentProfileWhereInput
    some?: EnvironmentProfileWhereInput
    none?: EnvironmentProfileWhereInput
  }

  export type ReviewNoteListRelationFilter = {
    every?: ReviewNoteWhereInput
    some?: ReviewNoteWhereInput
    none?: ReviewNoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthIdentityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnvironmentProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    locale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    locale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    locale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuthIdentityOrderByRelevanceInput = {
    fields: AuthIdentityOrderByRelevanceFieldEnum | AuthIdentityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuthIdentityProviderProviderUserIdCompoundUniqueInput = {
    provider: string
    providerUserId: string
  }

  export type AuthIdentityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthIdentityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthIdentityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthIdentityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthIdentitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[]
    notIn?: $Enums.ProviderType[]
    not?: NestedEnumProviderTypeFilter<$PrismaModel> | $Enums.ProviderType
  }

  export type EnumProviderProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProtocol | EnumProviderProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProtocol[]
    notIn?: $Enums.ProviderProtocol[]
    not?: NestedEnumProviderProtocolFilter<$PrismaModel> | $Enums.ProviderProtocol
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProviderAccountOrderByRelevanceInput = {
    fields: ProviderAccountOrderByRelevanceFieldEnum | ProviderAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProviderAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    isDefault?: SortOrder
    baseUrl?: SortOrder
    encryptedApiKey?: SortOrder
    defaultModel?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProviderAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    isDefault?: SortOrder
    baseUrl?: SortOrder
    encryptedApiKey?: SortOrder
    defaultModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    isDefault?: SortOrder
    baseUrl?: SortOrder
    encryptedApiKey?: SortOrder
    defaultModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[]
    notIn?: $Enums.ProviderType[]
    not?: NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderTypeFilter<$PrismaModel>
  }

  export type EnumProviderProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProtocol | EnumProviderProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProtocol[]
    notIn?: $Enums.ProviderProtocol[]
    not?: NestedEnumProviderProtocolWithAggregatesFilter<$PrismaModel> | $Enums.ProviderProtocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderProtocolFilter<$PrismaModel>
    _max?: NestedEnumProviderProtocolFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusFilter<$PrismaModel> | $Enums.WorkflowStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WorkflowVersionListRelationFilter = {
    every?: WorkflowVersionWhereInput
    some?: WorkflowVersionWhereInput
    none?: WorkflowVersionWhereInput
  }

  export type WorkflowVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowOrderByRelevanceInput = {
    fields: WorkflowOrderByRelevanceFieldEnum | WorkflowOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    status?: SortOrder
    latestVersionNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    latestVersionNo?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    status?: SortOrder
    latestVersionNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    status?: SortOrder
    latestVersionNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowSumOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    latestVersionNo?: SortOrder
  }

  export type EnumWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type WorkflowVersionOrderByRelevanceInput = {
    fields: WorkflowVersionOrderByRelevanceFieldEnum | WorkflowVersionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkflowVersionWorkflowIdVersionNoCompoundUniqueInput = {
    workflowId: bigint | number
    versionNo: number
  }

  export type WorkflowVersionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNo?: SortOrder
    graph?: SortOrder
    changelog?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowVersionAvgOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNo?: SortOrder
    createdBy?: SortOrder
  }

  export type WorkflowVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNo?: SortOrder
    changelog?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowVersionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNo?: SortOrder
    changelog?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowVersionSumOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNo?: SortOrder
    createdBy?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumWorkflowRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowRunStatus | EnumWorkflowRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowRunStatus[]
    notIn?: $Enums.WorkflowRunStatus[]
    not?: NestedEnumWorkflowRunStatusFilter<$PrismaModel> | $Enums.WorkflowRunStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type WorkflowRunStepListRelationFilter = {
    every?: WorkflowRunStepWhereInput
    some?: WorkflowRunStepWhereInput
    none?: WorkflowRunStepWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type WorkflowRunStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowRunOrderByRelevanceInput = {
    fields: WorkflowRunOrderByRelevanceFieldEnum | WorkflowRunOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkflowRunCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    workflowVersionId?: SortOrder
    triggerType?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
    logs?: SortOrder
    metadata?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowRunAvgOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    workflowVersionId?: SortOrder
    createdBy?: SortOrder
  }

  export type WorkflowRunMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    workflowVersionId?: SortOrder
    triggerType?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowRunMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    workflowVersionId?: SortOrder
    triggerType?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    errorMessage?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowRunSumOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    workflowVersionId?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumWorkflowRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowRunStatus | EnumWorkflowRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowRunStatus[]
    notIn?: $Enums.WorkflowRunStatus[]
    not?: NestedEnumWorkflowRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowRunStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowRunStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkflowRunScalarRelationFilter = {
    is?: WorkflowRunWhereInput
    isNot?: WorkflowRunWhereInput
  }

  export type WorkflowRunStepOrderByRelevanceInput = {
    fields: WorkflowRunStepOrderByRelevanceFieldEnum | WorkflowRunStepOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkflowRunStepCountOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    nodeId?: SortOrder
    nodeType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    input?: SortOrder
    output?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowRunStepAvgOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    attempts?: SortOrder
  }

  export type WorkflowRunStepMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    nodeId?: SortOrder
    nodeType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowRunStepMinOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    nodeId?: SortOrder
    nodeType?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    errorMessage?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowRunStepSumOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    attempts?: SortOrder
  }

  export type EnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[]
    notIn?: $Enums.AssetType[]
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type WorkflowRunNullableScalarRelationFilter = {
    is?: WorkflowRunWhereInput | null
    isNot?: WorkflowRunWhereInput | null
  }

  export type AssetOrderByRelevanceInput = {
    fields: AssetOrderByRelevanceFieldEnum | AssetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    type?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    type?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
    type?: SortOrder
    bucket?: SortOrder
    objectKey?: SortOrder
    publicUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    id?: SortOrder
    workflowRunId?: SortOrder
  }

  export type EnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[]
    notIn?: $Enums.AssetType[]
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type EnvironmentProfileOrderByRelevanceInput = {
    fields: EnvironmentProfileOrderByRelevanceFieldEnum | EnvironmentProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EnvironmentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    variablesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnvironmentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ReviewNoteOrderByRelevanceInput = {
    fields: ReviewNoteOrderByRelevanceFieldEnum | ReviewNoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewNoteCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    runId?: SortOrder
    authorUserId?: SortOrder
    sourceModel?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewNoteAvgOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    runId?: SortOrder
    authorUserId?: SortOrder
  }

  export type ReviewNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    runId?: SortOrder
    authorUserId?: SortOrder
    sourceModel?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewNoteMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    runId?: SortOrder
    authorUserId?: SortOrder
    sourceModel?: SortOrder
    severity?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewNoteSumOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    runId?: SortOrder
    authorUserId?: SortOrder
  }

  export type AuthIdentityCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthIdentityCreateWithoutUserInput, AuthIdentityUncheckedCreateWithoutUserInput> | AuthIdentityCreateWithoutUserInput[] | AuthIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthIdentityCreateOrConnectWithoutUserInput | AuthIdentityCreateOrConnectWithoutUserInput[]
    createMany?: AuthIdentityCreateManyUserInputEnvelope
    connect?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
  }

  export type ProviderAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<ProviderAccountCreateWithoutUserInput, ProviderAccountUncheckedCreateWithoutUserInput> | ProviderAccountCreateWithoutUserInput[] | ProviderAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProviderAccountCreateOrConnectWithoutUserInput | ProviderAccountCreateOrConnectWithoutUserInput[]
    createMany?: ProviderAccountCreateManyUserInputEnvelope
    connect?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
  }

  export type WorkflowCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkflowCreateWithoutOwnerInput, WorkflowUncheckedCreateWithoutOwnerInput> | WorkflowCreateWithoutOwnerInput[] | WorkflowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutOwnerInput | WorkflowCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkflowCreateManyOwnerInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type WorkflowRunCreateNestedManyWithoutCreatorInput = {
    create?: XOR<WorkflowRunCreateWithoutCreatorInput, WorkflowRunUncheckedCreateWithoutCreatorInput> | WorkflowRunCreateWithoutCreatorInput[] | WorkflowRunUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutCreatorInput | WorkflowRunCreateOrConnectWithoutCreatorInput[]
    createMany?: WorkflowRunCreateManyCreatorInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type EnvironmentProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<EnvironmentProfileCreateWithoutUserInput, EnvironmentProfileUncheckedCreateWithoutUserInput> | EnvironmentProfileCreateWithoutUserInput[] | EnvironmentProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentProfileCreateOrConnectWithoutUserInput | EnvironmentProfileCreateOrConnectWithoutUserInput[]
    createMany?: EnvironmentProfileCreateManyUserInputEnvelope
    connect?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
  }

  export type ReviewNoteCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewNoteCreateWithoutUserInput, ReviewNoteUncheckedCreateWithoutUserInput> | ReviewNoteCreateWithoutUserInput[] | ReviewNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutUserInput | ReviewNoteCreateOrConnectWithoutUserInput[]
    createMany?: ReviewNoteCreateManyUserInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type AuthIdentityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthIdentityCreateWithoutUserInput, AuthIdentityUncheckedCreateWithoutUserInput> | AuthIdentityCreateWithoutUserInput[] | AuthIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthIdentityCreateOrConnectWithoutUserInput | AuthIdentityCreateOrConnectWithoutUserInput[]
    createMany?: AuthIdentityCreateManyUserInputEnvelope
    connect?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
  }

  export type ProviderAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProviderAccountCreateWithoutUserInput, ProviderAccountUncheckedCreateWithoutUserInput> | ProviderAccountCreateWithoutUserInput[] | ProviderAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProviderAccountCreateOrConnectWithoutUserInput | ProviderAccountCreateOrConnectWithoutUserInput[]
    createMany?: ProviderAccountCreateManyUserInputEnvelope
    connect?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkflowCreateWithoutOwnerInput, WorkflowUncheckedCreateWithoutOwnerInput> | WorkflowCreateWithoutOwnerInput[] | WorkflowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutOwnerInput | WorkflowCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkflowCreateManyOwnerInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type WorkflowRunUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<WorkflowRunCreateWithoutCreatorInput, WorkflowRunUncheckedCreateWithoutCreatorInput> | WorkflowRunCreateWithoutCreatorInput[] | WorkflowRunUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutCreatorInput | WorkflowRunCreateOrConnectWithoutCreatorInput[]
    createMany?: WorkflowRunCreateManyCreatorInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type EnvironmentProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnvironmentProfileCreateWithoutUserInput, EnvironmentProfileUncheckedCreateWithoutUserInput> | EnvironmentProfileCreateWithoutUserInput[] | EnvironmentProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentProfileCreateOrConnectWithoutUserInput | EnvironmentProfileCreateOrConnectWithoutUserInput[]
    createMany?: EnvironmentProfileCreateManyUserInputEnvelope
    connect?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
  }

  export type ReviewNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewNoteCreateWithoutUserInput, ReviewNoteUncheckedCreateWithoutUserInput> | ReviewNoteCreateWithoutUserInput[] | ReviewNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutUserInput | ReviewNoteCreateOrConnectWithoutUserInput[]
    createMany?: ReviewNoteCreateManyUserInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthIdentityUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthIdentityCreateWithoutUserInput, AuthIdentityUncheckedCreateWithoutUserInput> | AuthIdentityCreateWithoutUserInput[] | AuthIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthIdentityCreateOrConnectWithoutUserInput | AuthIdentityCreateOrConnectWithoutUserInput[]
    upsert?: AuthIdentityUpsertWithWhereUniqueWithoutUserInput | AuthIdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthIdentityCreateManyUserInputEnvelope
    set?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    disconnect?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    delete?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    connect?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    update?: AuthIdentityUpdateWithWhereUniqueWithoutUserInput | AuthIdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthIdentityUpdateManyWithWhereWithoutUserInput | AuthIdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthIdentityScalarWhereInput | AuthIdentityScalarWhereInput[]
  }

  export type ProviderAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProviderAccountCreateWithoutUserInput, ProviderAccountUncheckedCreateWithoutUserInput> | ProviderAccountCreateWithoutUserInput[] | ProviderAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProviderAccountCreateOrConnectWithoutUserInput | ProviderAccountCreateOrConnectWithoutUserInput[]
    upsert?: ProviderAccountUpsertWithWhereUniqueWithoutUserInput | ProviderAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProviderAccountCreateManyUserInputEnvelope
    set?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    disconnect?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    delete?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    connect?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    update?: ProviderAccountUpdateWithWhereUniqueWithoutUserInput | ProviderAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProviderAccountUpdateManyWithWhereWithoutUserInput | ProviderAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProviderAccountScalarWhereInput | ProviderAccountScalarWhereInput[]
  }

  export type WorkflowUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkflowCreateWithoutOwnerInput, WorkflowUncheckedCreateWithoutOwnerInput> | WorkflowCreateWithoutOwnerInput[] | WorkflowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutOwnerInput | WorkflowCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutOwnerInput | WorkflowUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkflowCreateManyOwnerInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutOwnerInput | WorkflowUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutOwnerInput | WorkflowUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type WorkflowRunUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutCreatorInput, WorkflowRunUncheckedCreateWithoutCreatorInput> | WorkflowRunCreateWithoutCreatorInput[] | WorkflowRunUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutCreatorInput | WorkflowRunCreateOrConnectWithoutCreatorInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutCreatorInput | WorkflowRunUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: WorkflowRunCreateManyCreatorInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutCreatorInput | WorkflowRunUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutCreatorInput | WorkflowRunUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type EnvironmentProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnvironmentProfileCreateWithoutUserInput, EnvironmentProfileUncheckedCreateWithoutUserInput> | EnvironmentProfileCreateWithoutUserInput[] | EnvironmentProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentProfileCreateOrConnectWithoutUserInput | EnvironmentProfileCreateOrConnectWithoutUserInput[]
    upsert?: EnvironmentProfileUpsertWithWhereUniqueWithoutUserInput | EnvironmentProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnvironmentProfileCreateManyUserInputEnvelope
    set?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    disconnect?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    delete?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    connect?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    update?: EnvironmentProfileUpdateWithWhereUniqueWithoutUserInput | EnvironmentProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnvironmentProfileUpdateManyWithWhereWithoutUserInput | EnvironmentProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnvironmentProfileScalarWhereInput | EnvironmentProfileScalarWhereInput[]
  }

  export type ReviewNoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutUserInput, ReviewNoteUncheckedCreateWithoutUserInput> | ReviewNoteCreateWithoutUserInput[] | ReviewNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutUserInput | ReviewNoteCreateOrConnectWithoutUserInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutUserInput | ReviewNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewNoteCreateManyUserInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutUserInput | ReviewNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutUserInput | ReviewNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type AuthIdentityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthIdentityCreateWithoutUserInput, AuthIdentityUncheckedCreateWithoutUserInput> | AuthIdentityCreateWithoutUserInput[] | AuthIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthIdentityCreateOrConnectWithoutUserInput | AuthIdentityCreateOrConnectWithoutUserInput[]
    upsert?: AuthIdentityUpsertWithWhereUniqueWithoutUserInput | AuthIdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthIdentityCreateManyUserInputEnvelope
    set?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    disconnect?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    delete?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    connect?: AuthIdentityWhereUniqueInput | AuthIdentityWhereUniqueInput[]
    update?: AuthIdentityUpdateWithWhereUniqueWithoutUserInput | AuthIdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthIdentityUpdateManyWithWhereWithoutUserInput | AuthIdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthIdentityScalarWhereInput | AuthIdentityScalarWhereInput[]
  }

  export type ProviderAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProviderAccountCreateWithoutUserInput, ProviderAccountUncheckedCreateWithoutUserInput> | ProviderAccountCreateWithoutUserInput[] | ProviderAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProviderAccountCreateOrConnectWithoutUserInput | ProviderAccountCreateOrConnectWithoutUserInput[]
    upsert?: ProviderAccountUpsertWithWhereUniqueWithoutUserInput | ProviderAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProviderAccountCreateManyUserInputEnvelope
    set?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    disconnect?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    delete?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    connect?: ProviderAccountWhereUniqueInput | ProviderAccountWhereUniqueInput[]
    update?: ProviderAccountUpdateWithWhereUniqueWithoutUserInput | ProviderAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProviderAccountUpdateManyWithWhereWithoutUserInput | ProviderAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProviderAccountScalarWhereInput | ProviderAccountScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkflowCreateWithoutOwnerInput, WorkflowUncheckedCreateWithoutOwnerInput> | WorkflowCreateWithoutOwnerInput[] | WorkflowUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutOwnerInput | WorkflowCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutOwnerInput | WorkflowUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkflowCreateManyOwnerInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutOwnerInput | WorkflowUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutOwnerInput | WorkflowUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type WorkflowRunUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutCreatorInput, WorkflowRunUncheckedCreateWithoutCreatorInput> | WorkflowRunCreateWithoutCreatorInput[] | WorkflowRunUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutCreatorInput | WorkflowRunCreateOrConnectWithoutCreatorInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutCreatorInput | WorkflowRunUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: WorkflowRunCreateManyCreatorInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutCreatorInput | WorkflowRunUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutCreatorInput | WorkflowRunUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type EnvironmentProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnvironmentProfileCreateWithoutUserInput, EnvironmentProfileUncheckedCreateWithoutUserInput> | EnvironmentProfileCreateWithoutUserInput[] | EnvironmentProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentProfileCreateOrConnectWithoutUserInput | EnvironmentProfileCreateOrConnectWithoutUserInput[]
    upsert?: EnvironmentProfileUpsertWithWhereUniqueWithoutUserInput | EnvironmentProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnvironmentProfileCreateManyUserInputEnvelope
    set?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    disconnect?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    delete?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    connect?: EnvironmentProfileWhereUniqueInput | EnvironmentProfileWhereUniqueInput[]
    update?: EnvironmentProfileUpdateWithWhereUniqueWithoutUserInput | EnvironmentProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnvironmentProfileUpdateManyWithWhereWithoutUserInput | EnvironmentProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnvironmentProfileScalarWhereInput | EnvironmentProfileScalarWhereInput[]
  }

  export type ReviewNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutUserInput, ReviewNoteUncheckedCreateWithoutUserInput> | ReviewNoteCreateWithoutUserInput[] | ReviewNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutUserInput | ReviewNoteCreateOrConnectWithoutUserInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutUserInput | ReviewNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewNoteCreateManyUserInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutUserInput | ReviewNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutUserInput | ReviewNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuthIdentitiesInput = {
    create?: XOR<UserCreateWithoutAuthIdentitiesInput, UserUncheckedCreateWithoutAuthIdentitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthIdentitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthIdentitiesNestedInput = {
    create?: XOR<UserCreateWithoutAuthIdentitiesInput, UserUncheckedCreateWithoutAuthIdentitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthIdentitiesInput
    upsert?: UserUpsertWithoutAuthIdentitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthIdentitiesInput, UserUpdateWithoutAuthIdentitiesInput>, UserUncheckedUpdateWithoutAuthIdentitiesInput>
  }

  export type UserCreateNestedOneWithoutProviderAccountsInput = {
    create?: XOR<UserCreateWithoutProviderAccountsInput, UserUncheckedCreateWithoutProviderAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProviderTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProviderType
  }

  export type EnumProviderProtocolFieldUpdateOperationsInput = {
    set?: $Enums.ProviderProtocol
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProviderAccountsNestedInput = {
    create?: XOR<UserCreateWithoutProviderAccountsInput, UserUncheckedCreateWithoutProviderAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderAccountsInput
    upsert?: UserUpsertWithoutProviderAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProviderAccountsInput, UserUpdateWithoutProviderAccountsInput>, UserUncheckedUpdateWithoutProviderAccountsInput>
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowVersionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
  }

  export type WorkflowRunCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
  }

  export type WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
  }

  export type EnumWorkflowStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkflowStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type WorkflowVersionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    set?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    disconnect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    delete?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    update?: WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput | WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
  }

  export type WorkflowRunUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutWorkflowInput | WorkflowRunUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    set?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    disconnect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    delete?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    update?: WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput | WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
  }

  export type WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput> | WorkflowRunCreateWithoutWorkflowInput[] | WorkflowRunUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutWorkflowInput | WorkflowRunCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowRunCreateManyWorkflowInputEnvelope
    set?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    disconnect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    delete?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    connect?: WorkflowRunWhereUniqueInput | WorkflowRunWhereUniqueInput[]
    update?: WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowRunUpdateManyWithWhereWithoutWorkflowInput | WorkflowRunUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutVersionsInput = {
    create?: XOR<WorkflowCreateWithoutVersionsInput, WorkflowUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutVersionsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type WorkflowUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<WorkflowCreateWithoutVersionsInput, WorkflowUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutVersionsInput
    upsert?: WorkflowUpsertWithoutVersionsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutVersionsInput, WorkflowUpdateWithoutVersionsInput>, WorkflowUncheckedUpdateWithoutVersionsInput>
  }

  export type WorkflowCreateNestedOneWithoutRunsInput = {
    create?: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutRunsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkflowRunsInput = {
    create?: XOR<UserCreateWithoutWorkflowRunsInput, UserUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowRunsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowRunStepCreateNestedManyWithoutRunInput = {
    create?: XOR<WorkflowRunStepCreateWithoutRunInput, WorkflowRunStepUncheckedCreateWithoutRunInput> | WorkflowRunStepCreateWithoutRunInput[] | WorkflowRunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: WorkflowRunStepCreateOrConnectWithoutRunInput | WorkflowRunStepCreateOrConnectWithoutRunInput[]
    createMany?: WorkflowRunStepCreateManyRunInputEnvelope
    connect?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
  }

  export type AssetCreateNestedManyWithoutRunInput = {
    create?: XOR<AssetCreateWithoutRunInput, AssetUncheckedCreateWithoutRunInput> | AssetCreateWithoutRunInput[] | AssetUncheckedCreateWithoutRunInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutRunInput | AssetCreateOrConnectWithoutRunInput[]
    createMany?: AssetCreateManyRunInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type WorkflowRunStepUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<WorkflowRunStepCreateWithoutRunInput, WorkflowRunStepUncheckedCreateWithoutRunInput> | WorkflowRunStepCreateWithoutRunInput[] | WorkflowRunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: WorkflowRunStepCreateOrConnectWithoutRunInput | WorkflowRunStepCreateOrConnectWithoutRunInput[]
    createMany?: WorkflowRunStepCreateManyRunInputEnvelope
    connect?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<AssetCreateWithoutRunInput, AssetUncheckedCreateWithoutRunInput> | AssetCreateWithoutRunInput[] | AssetUncheckedCreateWithoutRunInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutRunInput | AssetCreateOrConnectWithoutRunInput[]
    createMany?: AssetCreateManyRunInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type EnumWorkflowRunStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkflowRunStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkflowUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutRunsInput
    upsert?: WorkflowUpsertWithoutRunsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutRunsInput, WorkflowUpdateWithoutRunsInput>, WorkflowUncheckedUpdateWithoutRunsInput>
  }

  export type UserUpdateOneWithoutWorkflowRunsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowRunsInput, UserUncheckedCreateWithoutWorkflowRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowRunsInput
    upsert?: UserUpsertWithoutWorkflowRunsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowRunsInput, UserUpdateWithoutWorkflowRunsInput>, UserUncheckedUpdateWithoutWorkflowRunsInput>
  }

  export type WorkflowRunStepUpdateManyWithoutRunNestedInput = {
    create?: XOR<WorkflowRunStepCreateWithoutRunInput, WorkflowRunStepUncheckedCreateWithoutRunInput> | WorkflowRunStepCreateWithoutRunInput[] | WorkflowRunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: WorkflowRunStepCreateOrConnectWithoutRunInput | WorkflowRunStepCreateOrConnectWithoutRunInput[]
    upsert?: WorkflowRunStepUpsertWithWhereUniqueWithoutRunInput | WorkflowRunStepUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: WorkflowRunStepCreateManyRunInputEnvelope
    set?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    disconnect?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    delete?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    connect?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    update?: WorkflowRunStepUpdateWithWhereUniqueWithoutRunInput | WorkflowRunStepUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: WorkflowRunStepUpdateManyWithWhereWithoutRunInput | WorkflowRunStepUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: WorkflowRunStepScalarWhereInput | WorkflowRunStepScalarWhereInput[]
  }

  export type AssetUpdateManyWithoutRunNestedInput = {
    create?: XOR<AssetCreateWithoutRunInput, AssetUncheckedCreateWithoutRunInput> | AssetCreateWithoutRunInput[] | AssetUncheckedCreateWithoutRunInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutRunInput | AssetCreateOrConnectWithoutRunInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutRunInput | AssetUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: AssetCreateManyRunInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutRunInput | AssetUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutRunInput | AssetUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type WorkflowRunStepUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<WorkflowRunStepCreateWithoutRunInput, WorkflowRunStepUncheckedCreateWithoutRunInput> | WorkflowRunStepCreateWithoutRunInput[] | WorkflowRunStepUncheckedCreateWithoutRunInput[]
    connectOrCreate?: WorkflowRunStepCreateOrConnectWithoutRunInput | WorkflowRunStepCreateOrConnectWithoutRunInput[]
    upsert?: WorkflowRunStepUpsertWithWhereUniqueWithoutRunInput | WorkflowRunStepUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: WorkflowRunStepCreateManyRunInputEnvelope
    set?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    disconnect?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    delete?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    connect?: WorkflowRunStepWhereUniqueInput | WorkflowRunStepWhereUniqueInput[]
    update?: WorkflowRunStepUpdateWithWhereUniqueWithoutRunInput | WorkflowRunStepUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: WorkflowRunStepUpdateManyWithWhereWithoutRunInput | WorkflowRunStepUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: WorkflowRunStepScalarWhereInput | WorkflowRunStepScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<AssetCreateWithoutRunInput, AssetUncheckedCreateWithoutRunInput> | AssetCreateWithoutRunInput[] | AssetUncheckedCreateWithoutRunInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutRunInput | AssetCreateOrConnectWithoutRunInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutRunInput | AssetUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: AssetCreateManyRunInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutRunInput | AssetUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutRunInput | AssetUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type WorkflowRunCreateNestedOneWithoutStepsInput = {
    create?: XOR<WorkflowRunCreateWithoutStepsInput, WorkflowRunUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutStepsInput
    connect?: WorkflowRunWhereUniqueInput
  }

  export type WorkflowRunUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutStepsInput, WorkflowRunUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutStepsInput
    upsert?: WorkflowRunUpsertWithoutStepsInput
    connect?: WorkflowRunWhereUniqueInput
    update?: XOR<XOR<WorkflowRunUpdateToOneWithWhereWithoutStepsInput, WorkflowRunUpdateWithoutStepsInput>, WorkflowRunUncheckedUpdateWithoutStepsInput>
  }

  export type WorkflowRunCreateNestedOneWithoutAssetsInput = {
    create?: XOR<WorkflowRunCreateWithoutAssetsInput, WorkflowRunUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutAssetsInput
    connect?: WorkflowRunWhereUniqueInput
  }

  export type EnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType
  }

  export type WorkflowRunUpdateOneWithoutAssetsNestedInput = {
    create?: XOR<WorkflowRunCreateWithoutAssetsInput, WorkflowRunUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: WorkflowRunCreateOrConnectWithoutAssetsInput
    upsert?: WorkflowRunUpsertWithoutAssetsInput
    disconnect?: WorkflowRunWhereInput | boolean
    delete?: WorkflowRunWhereInput | boolean
    connect?: WorkflowRunWhereUniqueInput
    update?: XOR<XOR<WorkflowRunUpdateToOneWithWhereWithoutAssetsInput, WorkflowRunUpdateWithoutAssetsInput>, WorkflowRunUncheckedUpdateWithoutAssetsInput>
  }

  export type UserCreateNestedOneWithoutEnvironmentProfilesInput = {
    create?: XOR<UserCreateWithoutEnvironmentProfilesInput, UserUncheckedCreateWithoutEnvironmentProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnvironmentProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnvironmentProfilesNestedInput = {
    create?: XOR<UserCreateWithoutEnvironmentProfilesInput, UserUncheckedCreateWithoutEnvironmentProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnvironmentProfilesInput
    upsert?: UserUpsertWithoutEnvironmentProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnvironmentProfilesInput, UserUpdateWithoutEnvironmentProfilesInput>, UserUncheckedUpdateWithoutEnvironmentProfilesInput>
  }

  export type UserCreateNestedOneWithoutReviewNotesInput = {
    create?: XOR<UserCreateWithoutReviewNotesInput, UserUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewNotesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutReviewNotesNestedInput = {
    create?: XOR<UserCreateWithoutReviewNotesInput, UserUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewNotesInput
    upsert?: UserUpsertWithoutReviewNotesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewNotesInput, UserUpdateWithoutReviewNotesInput>, UserUncheckedUpdateWithoutReviewNotesInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[]
    notIn?: $Enums.ProviderType[]
    not?: NestedEnumProviderTypeFilter<$PrismaModel> | $Enums.ProviderType
  }

  export type NestedEnumProviderProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProtocol | EnumProviderProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProtocol[]
    notIn?: $Enums.ProviderProtocol[]
    not?: NestedEnumProviderProtocolFilter<$PrismaModel> | $Enums.ProviderProtocol
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[]
    notIn?: $Enums.ProviderType[]
    not?: NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderTypeFilter<$PrismaModel>
  }

  export type NestedEnumProviderProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderProtocol | EnumProviderProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderProtocol[]
    notIn?: $Enums.ProviderProtocol[]
    not?: NestedEnumProviderProtocolWithAggregatesFilter<$PrismaModel> | $Enums.ProviderProtocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderProtocolFilter<$PrismaModel>
    _max?: NestedEnumProviderProtocolFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumWorkflowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusFilter<$PrismaModel> | $Enums.WorkflowStatus
  }

  export type NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowStatus | EnumWorkflowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowStatus[]
    notIn?: $Enums.WorkflowStatus[]
    not?: NestedEnumWorkflowStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWorkflowRunStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowRunStatus | EnumWorkflowRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowRunStatus[]
    notIn?: $Enums.WorkflowRunStatus[]
    not?: NestedEnumWorkflowRunStatusFilter<$PrismaModel> | $Enums.WorkflowRunStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumWorkflowRunStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowRunStatus | EnumWorkflowRunStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowRunStatus[]
    notIn?: $Enums.WorkflowRunStatus[]
    not?: NestedEnumWorkflowRunStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowRunStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowRunStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkflowRunStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[]
    notIn?: $Enums.AssetType[]
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[]
    notIn?: $Enums.AssetType[]
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type AuthIdentityCreateWithoutUserInput = {
    id?: bigint | number
    provider: string
    providerUserId: string
    createdAt?: Date | string
  }

  export type AuthIdentityUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    provider: string
    providerUserId: string
    createdAt?: Date | string
  }

  export type AuthIdentityCreateOrConnectWithoutUserInput = {
    where: AuthIdentityWhereUniqueInput
    create: XOR<AuthIdentityCreateWithoutUserInput, AuthIdentityUncheckedCreateWithoutUserInput>
  }

  export type AuthIdentityCreateManyUserInputEnvelope = {
    data: AuthIdentityCreateManyUserInput | AuthIdentityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProviderAccountCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    type: $Enums.ProviderType
    protocol?: $Enums.ProviderProtocol
    isDefault?: boolean
    baseUrl?: string | null
    encryptedApiKey: string
    defaultModel?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderAccountUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    type: $Enums.ProviderType
    protocol?: $Enums.ProviderProtocol
    isDefault?: boolean
    baseUrl?: string | null
    encryptedApiKey: string
    defaultModel?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderAccountCreateOrConnectWithoutUserInput = {
    where: ProviderAccountWhereUniqueInput
    create: XOR<ProviderAccountCreateWithoutUserInput, ProviderAccountUncheckedCreateWithoutUserInput>
  }

  export type ProviderAccountCreateManyUserInputEnvelope = {
    data: ProviderAccountCreateManyUserInput | ProviderAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowCreateWithoutOwnerInput = {
    id?: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
    runs?: WorkflowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutOwnerInput = {
    id?: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
    runs?: WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutOwnerInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutOwnerInput, WorkflowUncheckedCreateWithoutOwnerInput>
  }

  export type WorkflowCreateManyOwnerInputEnvelope = {
    data: WorkflowCreateManyOwnerInput | WorkflowCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowRunCreateWithoutCreatorInput = {
    id?: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutRunsInput
    steps?: WorkflowRunStepCreateNestedManyWithoutRunInput
    assets?: AssetCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunUncheckedCreateWithoutCreatorInput = {
    id?: bigint | number
    workflowId: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    steps?: WorkflowRunStepUncheckedCreateNestedManyWithoutRunInput
    assets?: AssetUncheckedCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunCreateOrConnectWithoutCreatorInput = {
    where: WorkflowRunWhereUniqueInput
    create: XOR<WorkflowRunCreateWithoutCreatorInput, WorkflowRunUncheckedCreateWithoutCreatorInput>
  }

  export type WorkflowRunCreateManyCreatorInputEnvelope = {
    data: WorkflowRunCreateManyCreatorInput | WorkflowRunCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EnvironmentProfileCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    isActive?: boolean
    variablesJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentProfileUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    isActive?: boolean
    variablesJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentProfileCreateOrConnectWithoutUserInput = {
    where: EnvironmentProfileWhereUniqueInput
    create: XOR<EnvironmentProfileCreateWithoutUserInput, EnvironmentProfileUncheckedCreateWithoutUserInput>
  }

  export type EnvironmentProfileCreateManyUserInputEnvelope = {
    data: EnvironmentProfileCreateManyUserInput | EnvironmentProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewNoteCreateWithoutUserInput = {
    id?: bigint | number
    workflowId?: bigint | number | null
    runId?: bigint | number | null
    sourceModel?: string | null
    severity?: string
    content: string
    createdAt?: Date | string
  }

  export type ReviewNoteUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    workflowId?: bigint | number | null
    runId?: bigint | number | null
    sourceModel?: string | null
    severity?: string
    content: string
    createdAt?: Date | string
  }

  export type ReviewNoteCreateOrConnectWithoutUserInput = {
    where: ReviewNoteWhereUniqueInput
    create: XOR<ReviewNoteCreateWithoutUserInput, ReviewNoteUncheckedCreateWithoutUserInput>
  }

  export type ReviewNoteCreateManyUserInputEnvelope = {
    data: ReviewNoteCreateManyUserInput | ReviewNoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthIdentityUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthIdentityWhereUniqueInput
    update: XOR<AuthIdentityUpdateWithoutUserInput, AuthIdentityUncheckedUpdateWithoutUserInput>
    create: XOR<AuthIdentityCreateWithoutUserInput, AuthIdentityUncheckedCreateWithoutUserInput>
  }

  export type AuthIdentityUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthIdentityWhereUniqueInput
    data: XOR<AuthIdentityUpdateWithoutUserInput, AuthIdentityUncheckedUpdateWithoutUserInput>
  }

  export type AuthIdentityUpdateManyWithWhereWithoutUserInput = {
    where: AuthIdentityScalarWhereInput
    data: XOR<AuthIdentityUpdateManyMutationInput, AuthIdentityUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthIdentityScalarWhereInput = {
    AND?: AuthIdentityScalarWhereInput | AuthIdentityScalarWhereInput[]
    OR?: AuthIdentityScalarWhereInput[]
    NOT?: AuthIdentityScalarWhereInput | AuthIdentityScalarWhereInput[]
    id?: BigIntFilter<"AuthIdentity"> | bigint | number
    userId?: BigIntFilter<"AuthIdentity"> | bigint | number
    provider?: StringFilter<"AuthIdentity"> | string
    providerUserId?: StringFilter<"AuthIdentity"> | string
    createdAt?: DateTimeFilter<"AuthIdentity"> | Date | string
  }

  export type ProviderAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: ProviderAccountWhereUniqueInput
    update: XOR<ProviderAccountUpdateWithoutUserInput, ProviderAccountUncheckedUpdateWithoutUserInput>
    create: XOR<ProviderAccountCreateWithoutUserInput, ProviderAccountUncheckedCreateWithoutUserInput>
  }

  export type ProviderAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: ProviderAccountWhereUniqueInput
    data: XOR<ProviderAccountUpdateWithoutUserInput, ProviderAccountUncheckedUpdateWithoutUserInput>
  }

  export type ProviderAccountUpdateManyWithWhereWithoutUserInput = {
    where: ProviderAccountScalarWhereInput
    data: XOR<ProviderAccountUpdateManyMutationInput, ProviderAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type ProviderAccountScalarWhereInput = {
    AND?: ProviderAccountScalarWhereInput | ProviderAccountScalarWhereInput[]
    OR?: ProviderAccountScalarWhereInput[]
    NOT?: ProviderAccountScalarWhereInput | ProviderAccountScalarWhereInput[]
    id?: BigIntFilter<"ProviderAccount"> | bigint | number
    userId?: BigIntFilter<"ProviderAccount"> | bigint | number
    name?: StringFilter<"ProviderAccount"> | string
    type?: EnumProviderTypeFilter<"ProviderAccount"> | $Enums.ProviderType
    protocol?: EnumProviderProtocolFilter<"ProviderAccount"> | $Enums.ProviderProtocol
    isDefault?: BoolFilter<"ProviderAccount"> | boolean
    baseUrl?: StringNullableFilter<"ProviderAccount"> | string | null
    encryptedApiKey?: StringFilter<"ProviderAccount"> | string
    defaultModel?: StringNullableFilter<"ProviderAccount"> | string | null
    metadata?: JsonNullableFilter<"ProviderAccount">
    createdAt?: DateTimeFilter<"ProviderAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderAccount"> | Date | string
  }

  export type WorkflowUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutOwnerInput, WorkflowUncheckedUpdateWithoutOwnerInput>
    create: XOR<WorkflowCreateWithoutOwnerInput, WorkflowUncheckedCreateWithoutOwnerInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutOwnerInput, WorkflowUncheckedUpdateWithoutOwnerInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutOwnerInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: BigIntFilter<"Workflow"> | bigint | number
    ownerUserId?: BigIntFilter<"Workflow"> | bigint | number
    slug?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    status?: EnumWorkflowStatusFilter<"Workflow"> | $Enums.WorkflowStatus
    latestVersionNo?: IntFilter<"Workflow"> | number
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
  }

  export type WorkflowRunUpsertWithWhereUniqueWithoutCreatorInput = {
    where: WorkflowRunWhereUniqueInput
    update: XOR<WorkflowRunUpdateWithoutCreatorInput, WorkflowRunUncheckedUpdateWithoutCreatorInput>
    create: XOR<WorkflowRunCreateWithoutCreatorInput, WorkflowRunUncheckedCreateWithoutCreatorInput>
  }

  export type WorkflowRunUpdateWithWhereUniqueWithoutCreatorInput = {
    where: WorkflowRunWhereUniqueInput
    data: XOR<WorkflowRunUpdateWithoutCreatorInput, WorkflowRunUncheckedUpdateWithoutCreatorInput>
  }

  export type WorkflowRunUpdateManyWithWhereWithoutCreatorInput = {
    where: WorkflowRunScalarWhereInput
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyWithoutCreatorInput>
  }

  export type WorkflowRunScalarWhereInput = {
    AND?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
    OR?: WorkflowRunScalarWhereInput[]
    NOT?: WorkflowRunScalarWhereInput | WorkflowRunScalarWhereInput[]
    id?: BigIntFilter<"WorkflowRun"> | bigint | number
    workflowId?: BigIntFilter<"WorkflowRun"> | bigint | number
    workflowVersionId?: BigIntNullableFilter<"WorkflowRun"> | bigint | number | null
    triggerType?: StringFilter<"WorkflowRun"> | string
    status?: EnumWorkflowRunStatusFilter<"WorkflowRun"> | $Enums.WorkflowRunStatus
    startedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkflowRun"> | string | null
    logs?: JsonNullableFilter<"WorkflowRun">
    metadata?: JsonNullableFilter<"WorkflowRun">
    createdBy?: BigIntNullableFilter<"WorkflowRun"> | bigint | number | null
    createdAt?: DateTimeFilter<"WorkflowRun"> | Date | string
  }

  export type EnvironmentProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: EnvironmentProfileWhereUniqueInput
    update: XOR<EnvironmentProfileUpdateWithoutUserInput, EnvironmentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<EnvironmentProfileCreateWithoutUserInput, EnvironmentProfileUncheckedCreateWithoutUserInput>
  }

  export type EnvironmentProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: EnvironmentProfileWhereUniqueInput
    data: XOR<EnvironmentProfileUpdateWithoutUserInput, EnvironmentProfileUncheckedUpdateWithoutUserInput>
  }

  export type EnvironmentProfileUpdateManyWithWhereWithoutUserInput = {
    where: EnvironmentProfileScalarWhereInput
    data: XOR<EnvironmentProfileUpdateManyMutationInput, EnvironmentProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type EnvironmentProfileScalarWhereInput = {
    AND?: EnvironmentProfileScalarWhereInput | EnvironmentProfileScalarWhereInput[]
    OR?: EnvironmentProfileScalarWhereInput[]
    NOT?: EnvironmentProfileScalarWhereInput | EnvironmentProfileScalarWhereInput[]
    id?: BigIntFilter<"EnvironmentProfile"> | bigint | number
    userId?: BigIntFilter<"EnvironmentProfile"> | bigint | number
    name?: StringFilter<"EnvironmentProfile"> | string
    isActive?: BoolFilter<"EnvironmentProfile"> | boolean
    variablesJson?: JsonFilter<"EnvironmentProfile">
    createdAt?: DateTimeFilter<"EnvironmentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentProfile"> | Date | string
  }

  export type ReviewNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewNoteWhereUniqueInput
    update: XOR<ReviewNoteUpdateWithoutUserInput, ReviewNoteUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewNoteCreateWithoutUserInput, ReviewNoteUncheckedCreateWithoutUserInput>
  }

  export type ReviewNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewNoteWhereUniqueInput
    data: XOR<ReviewNoteUpdateWithoutUserInput, ReviewNoteUncheckedUpdateWithoutUserInput>
  }

  export type ReviewNoteUpdateManyWithWhereWithoutUserInput = {
    where: ReviewNoteScalarWhereInput
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewNoteScalarWhereInput = {
    AND?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
    OR?: ReviewNoteScalarWhereInput[]
    NOT?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
    id?: BigIntFilter<"ReviewNote"> | bigint | number
    workflowId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    runId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    authorUserId?: BigIntNullableFilter<"ReviewNote"> | bigint | number | null
    sourceModel?: StringNullableFilter<"ReviewNote"> | string | null
    severity?: StringFilter<"ReviewNote"> | string
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
  }

  export type UserCreateWithoutAuthIdentitiesInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    providerAccounts?: ProviderAccountCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthIdentitiesInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    providerAccounts?: ProviderAccountUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunUncheckedCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileUncheckedCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthIdentitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthIdentitiesInput, UserUncheckedCreateWithoutAuthIdentitiesInput>
  }

  export type UserUpsertWithoutAuthIdentitiesInput = {
    update: XOR<UserUpdateWithoutAuthIdentitiesInput, UserUncheckedUpdateWithoutAuthIdentitiesInput>
    create: XOR<UserCreateWithoutAuthIdentitiesInput, UserUncheckedCreateWithoutAuthIdentitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthIdentitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthIdentitiesInput, UserUncheckedUpdateWithoutAuthIdentitiesInput>
  }

  export type UserUpdateWithoutAuthIdentitiesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerAccounts?: ProviderAccountUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthIdentitiesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerAccounts?: ProviderAccountUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUncheckedUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUncheckedUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProviderAccountsInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProviderAccountsInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunUncheckedCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileUncheckedCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProviderAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProviderAccountsInput, UserUncheckedCreateWithoutProviderAccountsInput>
  }

  export type UserUpsertWithoutProviderAccountsInput = {
    update: XOR<UserUpdateWithoutProviderAccountsInput, UserUncheckedUpdateWithoutProviderAccountsInput>
    create: XOR<UserCreateWithoutProviderAccountsInput, UserUncheckedCreateWithoutProviderAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProviderAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProviderAccountsInput, UserUncheckedUpdateWithoutProviderAccountsInput>
  }

  export type UserUpdateWithoutProviderAccountsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProviderAccountsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUncheckedUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUncheckedUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkflowsInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountCreateNestedManyWithoutUserInput
    workflowRuns?: WorkflowRunCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityUncheckedCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountUncheckedCreateNestedManyWithoutUserInput
    workflowRuns?: WorkflowRunUncheckedCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileUncheckedCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type WorkflowVersionCreateWithoutWorkflowInput = {
    id?: bigint | number
    versionNo: number
    graph: JsonNullValueInput | InputJsonValue
    changelog?: string | null
    createdBy?: bigint | number | null
    createdAt?: Date | string
  }

  export type WorkflowVersionUncheckedCreateWithoutWorkflowInput = {
    id?: bigint | number
    versionNo: number
    graph: JsonNullValueInput | InputJsonValue
    changelog?: string | null
    createdBy?: bigint | number | null
    createdAt?: Date | string
  }

  export type WorkflowVersionCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowVersionWhereUniqueInput
    create: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowVersionCreateManyWorkflowInputEnvelope = {
    data: WorkflowVersionCreateManyWorkflowInput | WorkflowVersionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowRunCreateWithoutWorkflowInput = {
    id?: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creator?: UserCreateNestedOneWithoutWorkflowRunsInput
    steps?: WorkflowRunStepCreateNestedManyWithoutRunInput
    assets?: AssetCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunUncheckedCreateWithoutWorkflowInput = {
    id?: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: bigint | number | null
    createdAt?: Date | string
    steps?: WorkflowRunStepUncheckedCreateNestedManyWithoutRunInput
    assets?: AssetUncheckedCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    create: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunCreateManyWorkflowInputEnvelope = {
    data: WorkflowRunCreateManyWorkflowInput | WorkflowRunCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUpdateManyWithoutUserNestedInput
    workflowRuns?: WorkflowRunUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUncheckedUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUncheckedUpdateManyWithoutUserNestedInput
    workflowRuns?: WorkflowRunUncheckedUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUncheckedUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowVersionWhereUniqueInput
    update: XOR<WorkflowVersionUpdateWithoutWorkflowInput, WorkflowVersionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowVersionWhereUniqueInput
    data: XOR<WorkflowVersionUpdateWithoutWorkflowInput, WorkflowVersionUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowVersionScalarWhereInput
    data: XOR<WorkflowVersionUpdateManyMutationInput, WorkflowVersionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowVersionScalarWhereInput = {
    AND?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
    OR?: WorkflowVersionScalarWhereInput[]
    NOT?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
    id?: BigIntFilter<"WorkflowVersion"> | bigint | number
    workflowId?: BigIntFilter<"WorkflowVersion"> | bigint | number
    versionNo?: IntFilter<"WorkflowVersion"> | number
    graph?: JsonFilter<"WorkflowVersion">
    changelog?: StringNullableFilter<"WorkflowVersion"> | string | null
    createdBy?: BigIntNullableFilter<"WorkflowVersion"> | bigint | number | null
    createdAt?: DateTimeFilter<"WorkflowVersion"> | Date | string
  }

  export type WorkflowRunUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    update: XOR<WorkflowRunUpdateWithoutWorkflowInput, WorkflowRunUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowRunCreateWithoutWorkflowInput, WorkflowRunUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowRunUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowRunWhereUniqueInput
    data: XOR<WorkflowRunUpdateWithoutWorkflowInput, WorkflowRunUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowRunUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowRunScalarWhereInput
    data: XOR<WorkflowRunUpdateManyMutationInput, WorkflowRunUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowCreateWithoutVersionsInput = {
    id?: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutWorkflowsInput
    runs?: WorkflowRunCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutVersionsInput = {
    id?: bigint | number
    ownerUserId: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    runs?: WorkflowRunUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutVersionsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutVersionsInput, WorkflowUncheckedCreateWithoutVersionsInput>
  }

  export type WorkflowUpsertWithoutVersionsInput = {
    update: XOR<WorkflowUpdateWithoutVersionsInput, WorkflowUncheckedUpdateWithoutVersionsInput>
    create: XOR<WorkflowCreateWithoutVersionsInput, WorkflowUncheckedCreateWithoutVersionsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutVersionsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutVersionsInput, WorkflowUncheckedUpdateWithoutVersionsInput>
  }

  export type WorkflowUpdateWithoutVersionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    runs?: WorkflowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutVersionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ownerUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    runs?: WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutRunsInput = {
    id?: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutWorkflowsInput
    versions?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutRunsInput = {
    id?: bigint | number
    ownerUserId: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutRunsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
  }

  export type UserCreateWithoutWorkflowRunsInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutOwnerInput
    environmentProfiles?: EnvironmentProfileCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowRunsInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityUncheckedCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutOwnerInput
    environmentProfiles?: EnvironmentProfileUncheckedCreateNestedManyWithoutUserInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowRunsInput, UserUncheckedCreateWithoutWorkflowRunsInput>
  }

  export type WorkflowRunStepCreateWithoutRunInput = {
    id?: bigint | number
    nodeId: string
    nodeType: string
    status?: $Enums.WorkflowRunStatus
    attempts?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WorkflowRunStepUncheckedCreateWithoutRunInput = {
    id?: bigint | number
    nodeId: string
    nodeType: string
    status?: $Enums.WorkflowRunStatus
    attempts?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WorkflowRunStepCreateOrConnectWithoutRunInput = {
    where: WorkflowRunStepWhereUniqueInput
    create: XOR<WorkflowRunStepCreateWithoutRunInput, WorkflowRunStepUncheckedCreateWithoutRunInput>
  }

  export type WorkflowRunStepCreateManyRunInputEnvelope = {
    data: WorkflowRunStepCreateManyRunInput | WorkflowRunStepCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type AssetCreateWithoutRunInput = {
    id?: bigint | number
    type: $Enums.AssetType
    bucket: string
    objectKey: string
    publicUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssetUncheckedCreateWithoutRunInput = {
    id?: bigint | number
    type: $Enums.AssetType
    bucket: string
    objectKey: string
    publicUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssetCreateOrConnectWithoutRunInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutRunInput, AssetUncheckedCreateWithoutRunInput>
  }

  export type AssetCreateManyRunInputEnvelope = {
    data: AssetCreateManyRunInput | AssetCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithoutRunsInput = {
    update: XOR<WorkflowUpdateWithoutRunsInput, WorkflowUncheckedUpdateWithoutRunsInput>
    create: XOR<WorkflowCreateWithoutRunsInput, WorkflowUncheckedCreateWithoutRunsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutRunsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutRunsInput, WorkflowUncheckedUpdateWithoutRunsInput>
  }

  export type WorkflowUpdateWithoutRunsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    versions?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutRunsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ownerUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type UserUpsertWithoutWorkflowRunsInput = {
    update: XOR<UserUpdateWithoutWorkflowRunsInput, UserUncheckedUpdateWithoutWorkflowRunsInput>
    create: XOR<UserCreateWithoutWorkflowRunsInput, UserUncheckedCreateWithoutWorkflowRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowRunsInput, UserUncheckedUpdateWithoutWorkflowRunsInput>
  }

  export type UserUpdateWithoutWorkflowRunsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutOwnerNestedInput
    environmentProfiles?: EnvironmentProfileUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowRunsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUncheckedUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutOwnerNestedInput
    environmentProfiles?: EnvironmentProfileUncheckedUpdateManyWithoutUserNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowRunStepUpsertWithWhereUniqueWithoutRunInput = {
    where: WorkflowRunStepWhereUniqueInput
    update: XOR<WorkflowRunStepUpdateWithoutRunInput, WorkflowRunStepUncheckedUpdateWithoutRunInput>
    create: XOR<WorkflowRunStepCreateWithoutRunInput, WorkflowRunStepUncheckedCreateWithoutRunInput>
  }

  export type WorkflowRunStepUpdateWithWhereUniqueWithoutRunInput = {
    where: WorkflowRunStepWhereUniqueInput
    data: XOR<WorkflowRunStepUpdateWithoutRunInput, WorkflowRunStepUncheckedUpdateWithoutRunInput>
  }

  export type WorkflowRunStepUpdateManyWithWhereWithoutRunInput = {
    where: WorkflowRunStepScalarWhereInput
    data: XOR<WorkflowRunStepUpdateManyMutationInput, WorkflowRunStepUncheckedUpdateManyWithoutRunInput>
  }

  export type WorkflowRunStepScalarWhereInput = {
    AND?: WorkflowRunStepScalarWhereInput | WorkflowRunStepScalarWhereInput[]
    OR?: WorkflowRunStepScalarWhereInput[]
    NOT?: WorkflowRunStepScalarWhereInput | WorkflowRunStepScalarWhereInput[]
    id?: BigIntFilter<"WorkflowRunStep"> | bigint | number
    workflowRunId?: BigIntFilter<"WorkflowRunStep"> | bigint | number
    nodeId?: StringFilter<"WorkflowRunStep"> | string
    nodeType?: StringFilter<"WorkflowRunStep"> | string
    status?: EnumWorkflowRunStatusFilter<"WorkflowRunStep"> | $Enums.WorkflowRunStatus
    attempts?: IntFilter<"WorkflowRunStep"> | number
    input?: JsonNullableFilter<"WorkflowRunStep">
    output?: JsonNullableFilter<"WorkflowRunStep">
    errorMessage?: StringNullableFilter<"WorkflowRunStep"> | string | null
    startedAt?: DateTimeNullableFilter<"WorkflowRunStep"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"WorkflowRunStep"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkflowRunStep"> | Date | string
  }

  export type AssetUpsertWithWhereUniqueWithoutRunInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutRunInput, AssetUncheckedUpdateWithoutRunInput>
    create: XOR<AssetCreateWithoutRunInput, AssetUncheckedCreateWithoutRunInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutRunInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutRunInput, AssetUncheckedUpdateWithoutRunInput>
  }

  export type AssetUpdateManyWithWhereWithoutRunInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutRunInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: BigIntFilter<"Asset"> | bigint | number
    workflowRunId?: BigIntNullableFilter<"Asset"> | bigint | number | null
    type?: EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
    bucket?: StringFilter<"Asset"> | string
    objectKey?: StringFilter<"Asset"> | string
    publicUrl?: StringNullableFilter<"Asset"> | string | null
    metadata?: JsonNullableFilter<"Asset">
    createdAt?: DateTimeFilter<"Asset"> | Date | string
  }

  export type WorkflowRunCreateWithoutStepsInput = {
    id?: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutRunsInput
    creator?: UserCreateNestedOneWithoutWorkflowRunsInput
    assets?: AssetCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunUncheckedCreateWithoutStepsInput = {
    id?: bigint | number
    workflowId: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: bigint | number | null
    createdAt?: Date | string
    assets?: AssetUncheckedCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunCreateOrConnectWithoutStepsInput = {
    where: WorkflowRunWhereUniqueInput
    create: XOR<WorkflowRunCreateWithoutStepsInput, WorkflowRunUncheckedCreateWithoutStepsInput>
  }

  export type WorkflowRunUpsertWithoutStepsInput = {
    update: XOR<WorkflowRunUpdateWithoutStepsInput, WorkflowRunUncheckedUpdateWithoutStepsInput>
    create: XOR<WorkflowRunCreateWithoutStepsInput, WorkflowRunUncheckedCreateWithoutStepsInput>
    where?: WorkflowRunWhereInput
  }

  export type WorkflowRunUpdateToOneWithWhereWithoutStepsInput = {
    where?: WorkflowRunWhereInput
    data: XOR<WorkflowRunUpdateWithoutStepsInput, WorkflowRunUncheckedUpdateWithoutStepsInput>
  }

  export type WorkflowRunUpdateWithoutStepsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutRunsNestedInput
    creator?: UserUpdateOneWithoutWorkflowRunsNestedInput
    assets?: AssetUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunUncheckedUpdateWithoutStepsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: AssetUncheckedUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunCreateWithoutAssetsInput = {
    id?: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutRunsInput
    creator?: UserCreateNestedOneWithoutWorkflowRunsInput
    steps?: WorkflowRunStepCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunUncheckedCreateWithoutAssetsInput = {
    id?: bigint | number
    workflowId: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: bigint | number | null
    createdAt?: Date | string
    steps?: WorkflowRunStepUncheckedCreateNestedManyWithoutRunInput
  }

  export type WorkflowRunCreateOrConnectWithoutAssetsInput = {
    where: WorkflowRunWhereUniqueInput
    create: XOR<WorkflowRunCreateWithoutAssetsInput, WorkflowRunUncheckedCreateWithoutAssetsInput>
  }

  export type WorkflowRunUpsertWithoutAssetsInput = {
    update: XOR<WorkflowRunUpdateWithoutAssetsInput, WorkflowRunUncheckedUpdateWithoutAssetsInput>
    create: XOR<WorkflowRunCreateWithoutAssetsInput, WorkflowRunUncheckedCreateWithoutAssetsInput>
    where?: WorkflowRunWhereInput
  }

  export type WorkflowRunUpdateToOneWithWhereWithoutAssetsInput = {
    where?: WorkflowRunWhereInput
    data: XOR<WorkflowRunUpdateWithoutAssetsInput, WorkflowRunUncheckedUpdateWithoutAssetsInput>
  }

  export type WorkflowRunUpdateWithoutAssetsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutRunsNestedInput
    creator?: UserUpdateOneWithoutWorkflowRunsNestedInput
    steps?: WorkflowRunStepUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunUncheckedUpdateWithoutAssetsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowRunStepUncheckedUpdateManyWithoutRunNestedInput
  }

  export type UserCreateWithoutEnvironmentProfilesInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunCreateNestedManyWithoutCreatorInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnvironmentProfilesInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityUncheckedCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunUncheckedCreateNestedManyWithoutCreatorInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnvironmentProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnvironmentProfilesInput, UserUncheckedCreateWithoutEnvironmentProfilesInput>
  }

  export type UserUpsertWithoutEnvironmentProfilesInput = {
    update: XOR<UserUpdateWithoutEnvironmentProfilesInput, UserUncheckedUpdateWithoutEnvironmentProfilesInput>
    create: XOR<UserCreateWithoutEnvironmentProfilesInput, UserUncheckedCreateWithoutEnvironmentProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnvironmentProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnvironmentProfilesInput, UserUncheckedUpdateWithoutEnvironmentProfilesInput>
  }

  export type UserUpdateWithoutEnvironmentProfilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUpdateManyWithoutCreatorNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnvironmentProfilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUncheckedUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUncheckedUpdateManyWithoutCreatorNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReviewNotesInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewNotesInput = {
    id?: bigint | number
    email: string
    displayName?: string | null
    locale?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authIdentities?: AuthIdentityUncheckedCreateNestedManyWithoutUserInput
    providerAccounts?: ProviderAccountUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutOwnerInput
    workflowRuns?: WorkflowRunUncheckedCreateNestedManyWithoutCreatorInput
    environmentProfiles?: EnvironmentProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewNotesInput, UserUncheckedCreateWithoutReviewNotesInput>
  }

  export type UserUpsertWithoutReviewNotesInput = {
    update: XOR<UserUpdateWithoutReviewNotesInput, UserUncheckedUpdateWithoutReviewNotesInput>
    create: XOR<UserCreateWithoutReviewNotesInput, UserUncheckedCreateWithoutReviewNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewNotesInput, UserUncheckedUpdateWithoutReviewNotesInput>
  }

  export type UserUpdateWithoutReviewNotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewNotesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authIdentities?: AuthIdentityUncheckedUpdateManyWithoutUserNestedInput
    providerAccounts?: ProviderAccountUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutOwnerNestedInput
    workflowRuns?: WorkflowRunUncheckedUpdateManyWithoutCreatorNestedInput
    environmentProfiles?: EnvironmentProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthIdentityCreateManyUserInput = {
    id?: bigint | number
    provider: string
    providerUserId: string
    createdAt?: Date | string
  }

  export type ProviderAccountCreateManyUserInput = {
    id?: bigint | number
    name: string
    type: $Enums.ProviderType
    protocol?: $Enums.ProviderProtocol
    isDefault?: boolean
    baseUrl?: string | null
    encryptedApiKey: string
    defaultModel?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowCreateManyOwnerInput = {
    id?: bigint | number
    slug: string
    name: string
    status?: $Enums.WorkflowStatus
    latestVersionNo?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowRunCreateManyCreatorInput = {
    id?: bigint | number
    workflowId: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EnvironmentProfileCreateManyUserInput = {
    id?: bigint | number
    name: string
    isActive?: boolean
    variablesJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewNoteCreateManyUserInput = {
    id?: bigint | number
    workflowId?: bigint | number | null
    runId?: bigint | number | null
    sourceModel?: string | null
    severity?: string
    content: string
    createdAt?: Date | string
  }

  export type AuthIdentityUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthIdentityUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthIdentityUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAccountUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    protocol?: EnumProviderProtocolFieldUpdateOperationsInput | $Enums.ProviderProtocol
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    defaultModel?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAccountUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    protocol?: EnumProviderProtocolFieldUpdateOperationsInput | $Enums.ProviderProtocol
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    defaultModel?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAccountUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    protocol?: EnumProviderProtocolFieldUpdateOperationsInput | $Enums.ProviderProtocol
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    encryptedApiKey?: StringFieldUpdateOperationsInput | string
    defaultModel?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUpdateWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
    runs?: WorkflowRunUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
    runs?: WorkflowRunUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutOwnerInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowStatusFieldUpdateOperationsInput | $Enums.WorkflowStatus
    latestVersionNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunUpdateWithoutCreatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutRunsNestedInput
    steps?: WorkflowRunStepUpdateManyWithoutRunNestedInput
    assets?: AssetUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunUncheckedUpdateWithoutCreatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowRunStepUncheckedUpdateManyWithoutRunNestedInput
    assets?: AssetUncheckedUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunUncheckedUpdateManyWithoutCreatorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentProfileUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    variablesJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentProfileUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    variablesJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentProfileUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    variablesJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    runId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sourceModel?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    runId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sourceModel?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    runId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sourceModel?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionCreateManyWorkflowInput = {
    id?: bigint | number
    versionNo: number
    graph: JsonNullValueInput | InputJsonValue
    changelog?: string | null
    createdBy?: bigint | number | null
    createdAt?: Date | string
  }

  export type WorkflowRunCreateManyWorkflowInput = {
    id?: bigint | number
    workflowVersionId?: bigint | number | null
    triggerType?: string
    status?: $Enums.WorkflowRunStatus
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    errorMessage?: string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: bigint | number | null
    createdAt?: Date | string
  }

  export type WorkflowVersionUpdateWithoutWorkflowInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    versionNo?: IntFieldUpdateOperationsInput | number
    graph?: JsonNullValueInput | InputJsonValue
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionUncheckedUpdateWithoutWorkflowInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    versionNo?: IntFieldUpdateOperationsInput | number
    graph?: JsonNullValueInput | InputJsonValue
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    versionNo?: IntFieldUpdateOperationsInput | number
    graph?: JsonNullValueInput | InputJsonValue
    changelog?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunUpdateWithoutWorkflowInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutWorkflowRunsNestedInput
    steps?: WorkflowRunStepUpdateManyWithoutRunNestedInput
    assets?: AssetUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunUncheckedUpdateWithoutWorkflowInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowRunStepUncheckedUpdateManyWithoutRunNestedInput
    assets?: AssetUncheckedUpdateManyWithoutRunNestedInput
  }

  export type WorkflowRunUncheckedUpdateManyWithoutWorkflowInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    workflowVersionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    triggerType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunStepCreateManyRunInput = {
    id?: bigint | number
    nodeId: string
    nodeType: string
    status?: $Enums.WorkflowRunStatus
    attempts?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: string | null
    startedAt?: Date | string | null
    finishedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AssetCreateManyRunInput = {
    id?: bigint | number
    type: $Enums.AssetType
    bucket: string
    objectKey: string
    publicUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowRunStepUpdateWithoutRunInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nodeId?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    attempts?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunStepUncheckedUpdateWithoutRunInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nodeId?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    attempts?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowRunStepUncheckedUpdateManyWithoutRunInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nodeId?: StringFieldUpdateOperationsInput | string
    nodeType?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkflowRunStatusFieldUpdateOperationsInput | $Enums.WorkflowRunStatus
    attempts?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUpdateWithoutRunInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    bucket?: StringFieldUpdateOperationsInput | string
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateWithoutRunInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    bucket?: StringFieldUpdateOperationsInput | string
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetUncheckedUpdateManyWithoutRunInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    bucket?: StringFieldUpdateOperationsInput | string
    objectKey?: StringFieldUpdateOperationsInput | string
    publicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}