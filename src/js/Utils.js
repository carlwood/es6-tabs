/**
 * Validates an object of options with the valid default props object
 */
export function validateOptions(options, defaultProps) {
    Object.keys(options).forEach(option => {
        if (!defaultProps.hasOwnProperty(option)) {
            throw new Error(`[graphite-tabs]: \`${option}\` is not a valid option`)
        }
    })
}
