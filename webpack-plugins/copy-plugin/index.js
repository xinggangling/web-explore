class CopyPlugin {
    constructor(patterns, options) {
        this.patterns = patterns || [];
        this.options = options || {};
    }

    apply(compiler) {
        compiler.hooks.compilation.tap('CopyPlugin', compilation => {
            compilation.hooks.additionalAssets.tapAsync(
                'CopyPlugin',
                cb => {

                }
            );
        });
    }
}
