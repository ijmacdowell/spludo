/*
 * This file is part of the Spludo Framework.
 * Copyright (c) 2009 DracoBlue, http://dracoblue.net/
 *
 * Licensed under the terms of MIT License. For the full copyright and license
 * information, please see the LICENSE file in the root folder.
 */

Controller = function(path, options) {
    if (process.isFunction(options.execute)) {
        this.execute = options.execute;
        delete options.execute;
    }

    if (options.path) {
        throw new Error("The path for a controller cannot be set by using the options hash!");
    }

    this.setOptions(options);
    this.options.path = path;

    controller_manager.addController(path, this);
}

Controller.prototype = {
    'execute': function() {
        throw new Error("Implement execute-method me!");
    }
}

process.mixin(true, Controller.prototype, Options.prototype, Logging.prototype);
