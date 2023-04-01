Scratch.extensions.register('Create Variable', {
    getInfo: function () {
        return {
            id: 'createVariable',
            name: 'Create Variable',
            blocks: [
                {
                    opcode: 'createVariable',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'create variable %s',
                    arguments: {
                        s: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'myVariable'
                        }
                    }
                }
            ]
        };
    },
    createVariable: function (args) {
        const variableName = args.s;
        Scratch.vm.runtime.vars[variableName] = 0;
    }
});
