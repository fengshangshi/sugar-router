/**
 * @file 路由类
 * @author ss.feng
 */
'use strict'

const sha1 = require('sha1');
const type = require('sugar-type');

class Router {
    constructor(path) {
        if (type.isString(path) === false || path.length === 0) {
            throw new Error('Router "path" ' + path + ' is illegal');
        }

        this.rawPath = path;
        this.name = sha1(this.rawPath);

        // 存放处理器
        this.preProcessor = [];
        this.postProcessor = [];
    }

    setPreProcessor(processor) {
        let __this = this;

        function savePreProcessor(processor) {
            if (type.isFunction(processor)) {
                __this.preProcessor.push(processor);
            }
        }

        if (type.isArray(processor)) {
            processor.forEach((p) => {
                savePreProcessor(p);
            });
        }

        savePreProcessor(processor);
    }

    setPostProcessor(processor) {
        let __this = this;

        function savePostProcessor(processor) {
            if (type.isFunction(processor)) {
                __this.postProcessor.push(processor);
            }
        }

        if (type.isArray(processor)) {
            processor.forEach((p) => {
                savePostProcessor(p);
            });
        }

        savePostProcessor(processor);
    }

    setProcessor(processor) {
        this.setPreProcessor(processor);
        this.setPostProcessor(processor);
    }

    getPreProcessor() {
        return this.preProcessor;
    }

    getPostProcessor() {
        return this.postProcessor;
    }

    getProcessor() {
        return {
            preProcessor: this.getPreProcessor(),
            postProcessor: this.getPostProcessor(),
        }
    }
}

module.exports = Router;
