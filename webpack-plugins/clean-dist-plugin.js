const fs = require('fs');
const path = require('path');

class CleanDistPlugin {
    constructor(dirPath) {
        this.dirPath = dirPath;
    }

    apply(compiler) {
        compiler.hooks.beforeRun.tapAsync('CleanDistPlugin', (compiler, cb) => {
            if (fs.existsSync(this.dirPath)) {
                const clearDist = dirPath => {
                    const files = fs.readdirSync(dirPath);
                    for (let i = 0; i < files.length; i++) {
                        const itemPath = path.join(dirPath, files[i]);
                        if (fs.statSync(itemPath).isDirectory()) {
                            clearDist(itemPath);
                        } else {
                            fs.unlinkSync(itemPath, true);
                        }
                    }
                    fs.rmdirSync(dirPath);
                };
                clearDist(this.dirPath);
            }
            cb();
        });
    }
}

module.exports = CleanDistPlugin;
