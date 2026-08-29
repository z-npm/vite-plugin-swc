[**@o.z/vite-plugin-swc API**](../README.md)

***

# Interface: Options

Defined in: [src/lib/index.ts:9](https://github.com/z-npm/vite-plugin-swc/blob/049f1eb2fc2a8791c34d4991d40257c1a6c5736b/src/lib/index.ts#L9)

Options for the Vite SWC plugin.
Extends SWC's transformation options, omitting `filename`, `sourceFileName` and `exclude`

## Extends

- `Omit`\<`SWCOption`, `"filename"` \| `"sourceFileName"` \| `"exclude"`\>

## Properties

### include?

> `optional` **include?**: `FilterPattern`

Defined in: [src/lib/index.ts:17](https://github.com/z-npm/vite-plugin-swc/blob/049f1eb2fc2a8791c34d4991d40257c1a6c5736b/src/lib/index.ts#L17)

A picomatch pattern, or array of patterns, which specifies the files to include.

#### Default

```ts
/\.(ts|tsx|js|jsx)$/
```

***

### exclude?

> `optional` **exclude?**: `FilterPattern`

Defined in: [src/lib/index.ts:23](https://github.com/z-npm/vite-plugin-swc/blob/049f1eb2fc2a8791c34d4991d40257c1a6c5736b/src/lib/index.ts#L23)

A picomatch pattern, or array of patterns, which specifies the files to exclude.

#### Default

```ts
"node_modules"
```

***

### script?

> `optional` **script?**: `boolean`

Defined in: node\_modules/@swc/types/index.d.ts:265

If true, a file is parsed as a script instead of module.

#### Inherited from

`Omit.script`

***

### cwd?

> `optional` **cwd?**: `string`

Defined in: node\_modules/@swc/types/index.d.ts:272

The working directory that all paths in the programmatic
options will be resolved relative to.

Defaults to `process.cwd()`.

#### Inherited from

`Omit.cwd`

***

### caller?

> `optional` **caller?**: `CallerOptions`

Defined in: node\_modules/@swc/types/index.d.ts:273

#### Inherited from

`Omit.caller`

***

### root?

> `optional` **root?**: `string`

Defined in: node\_modules/@swc/types/index.d.ts:299

The initial path that will be processed based on the "rootMode" to
determine the conceptual root folder for the current Swc project.
This is used in two primary cases:

- The base directory when checking for the default "configFile" value
- The default value for "swcrcRoots".

Defaults to `opts.cwd`

#### Inherited from

`Omit.root`

***

### rootMode?

> `optional` **rootMode?**: `"root"` \| `"upward"` \| `"upward-optional"`

Defined in: node\_modules/@swc/types/index.d.ts:330

This option, combined with the "root" value, defines how Swc chooses
its project root. The different modes define different ways that Swc
can process the "root" value to get the final project root.

"root" - Passes the "root" value through as unchanged.
"upward" - Walks upward from the "root" directory, looking for a directory
containing a .swcrc file, and throws an error if a .swcrc
is not found.
"upward-optional" - Walk upward from the "root" directory, looking for
a directory containing a .swcrc file, and falls back to "root"
 if a .swcrc is not found.

"root" is the default mode because it avoids the risk that Swc
will accidentally load a .swcrc that is entirely outside
of the current project folder. If you use "upward-optional",
be aware that it will walk up the directory structure all the
way to the filesystem root, and it is always possible that someone
will have a forgotten .swcrc in their home directory,
which could cause unexpected errors in your builds.

Users with monorepo project structures that run builds/tests on a
per-package basis may well want to use "upward" since monorepos
often have a .swcrc in the project root. Running Swc
in a monorepo subdirectory without "upward", will cause Swc
to skip loading any .swcrc files in the project root,
which can lead to unexpected errors and compilation failure.

#### Inherited from

`Omit.rootMode`

***

### envName?

> `optional` **envName?**: `string`

Defined in: node\_modules/@swc/types/index.d.ts:339

The current active environment used during configuration loading.
This value is used as the key when resolving "env" configs,
and is also available inside configuration functions, plugins,
and presets, via the api.env() function.

Defaults to `process.env.SWC_ENV || process.env.NODE_ENV || "development"`

#### Inherited from

`Omit.envName`

***

### configFile?

> `optional` **configFile?**: `string` \| `boolean`

Defined in: node\_modules/@swc/types/index.d.ts:355

Defaults to searching for a default `.swcrc` file, but can
be passed the path of any JS or JSON5 config file.

NOTE: This option does not affect loading of .swcrc files,
so while it may be tempting to do configFile: "./foo/.swcrc",
it is not recommended. If the given .swcrc is loaded via the
standard file-relative logic, you'll end up loading the same
config file twice, merging it with itself. If you are linking
a specific config file, it is recommended to stick with a
naming scheme that is independent of the "swcrc" name.

Defaults to `path.resolve(opts.root, ".swcrc")`

#### Inherited from

`Omit.configFile`

***

### swcrc?

> `optional` **swcrc?**: `boolean`

Defined in: node\_modules/@swc/types/index.d.ts:367

true will enable searching for configuration files relative to the "filename" provided to Swc.

A swcrc value passed in the programmatic options will override one set within a configuration file.

Note: .swcrc files are only loaded if the current "filename" is inside of
 a package that matches one of the "swcrcRoots" packages.

Defaults to true as long as the filename option has been specified

#### Inherited from

`Omit.swcrc`

***

### swcrcRoots?

> `optional` **swcrcRoots?**: `boolean` \| `MatchPattern` \| `MatchPattern`[]

Defined in: node\_modules/@swc/types/index.d.ts:386

By default, Babel will only search for .babelrc files within the "root" package
 because otherwise Babel cannot know if a given .babelrc is meant to be loaded,
 or if it's "plugins" and "presets" have even been installed, since the file
 being compiled could be inside node_modules, or have been symlinked into the project.

This option allows users to provide a list of other packages that should be
considered "root" packages when considering whether to load .babelrc files.

For example, a monorepo setup that wishes to allow individual packages
to have their own configs might want to do

Defaults to `opts.root`

#### Inherited from

`Omit.swcrcRoots`

***

### inputSourceMap?

> `optional` **inputSourceMap?**: `string` \| `boolean`

Defined in: node\_modules/@swc/types/index.d.ts:396

`true` will attempt to load an input sourcemap from the file itself, if it
contains a //# sourceMappingURL=... comment. If no map is found, or the
map fails to load and parse, it will be silently discarded.

 If an object is provided, it will be treated as the source map object itself.

Defaults to `true`.

#### Inherited from

`Omit.inputSourceMap`

***

### sourceRoot?

> `optional` **sourceRoot?**: `string`

Defined in: node\_modules/@swc/types/index.d.ts:406

The sourceRoot fields to set in the generated source map, if one is desired.

#### Inherited from

`Omit.sourceRoot`

***

### plugin?

> `optional` **plugin?**: `Plugin`

Defined in: node\_modules/@swc/types/index.d.ts:407

#### Inherited from

`Omit.plugin`

***

### isModule?

> `optional` **isModule?**: `boolean` \| `"unknown"` \| `"commonjs"`

Defined in: node\_modules/@swc/types/index.d.ts:408

#### Inherited from

`Omit.isModule`

***

### outputPath?

> `optional` **outputPath?**: `string`

Defined in: node\_modules/@swc/types/index.d.ts:413

Destination path. Note that this value is used only to fix source path
of source map files and swc does not write output to this path.

#### Inherited from

`Omit.outputPath`

***

### test?

> `optional` **test?**: `string` \| `string`[]

Defined in: node\_modules/@swc/types/index.d.ts:427

Note: The type is string because it follows rust's regex syntax.

#### Inherited from

`Omit.test`

***

### env?

> `optional` **env?**: `EnvConfig`

Defined in: node\_modules/@swc/types/index.d.ts:432

#### Inherited from

`Omit.env`

***

### jsc?

> `optional` **jsc?**: `JscConfig`

Defined in: node\_modules/@swc/types/index.d.ts:433

#### Inherited from

`Omit.jsc`

***

### module?

> `optional` **module?**: `ModuleConfig`

Defined in: node\_modules/@swc/types/index.d.ts:434

#### Inherited from

`Omit.module`

***

### minify?

> `optional` **minify?**: `boolean`

Defined in: node\_modules/@swc/types/index.d.ts:435

#### Inherited from

`Omit.minify`

***

### sourceMaps?

> `optional` **sourceMaps?**: `boolean` \| `"inline"`

Defined in: node\_modules/@swc/types/index.d.ts:447

- true to generate a sourcemap for the code and include it in the result object.
- "inline" to generate a sourcemap and append it as a data URL to the end of the code, but not include it in the result object.

`swc-cli` overloads some of these to also affect how maps are written to disk:

- true will write the map to a .map file on disk
- "inline" will write the file directly, so it will have a data: containing the map
- Note: These options are bit weird, so it may make the most sense to just use true
 and handle the rest in your own code, depending on your use case.

#### Inherited from

`Omit.sourceMaps`

***

### inlineSourcesContent?

> `optional` **inlineSourcesContent?**: `boolean`

Defined in: node\_modules/@swc/types/index.d.ts:448

#### Inherited from

`Omit.inlineSourcesContent`
