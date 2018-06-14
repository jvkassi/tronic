import merge from 'webpack-merge'
import tronicBABEL from 'tronic-babel'
import tronicCSS from 'tronic-css'
import tronicJSON from 'tronic-json'
import tronicSASS from 'tronic-sass'
import yargs from 'yargs'

const whitelist = ['babel', 'css', 'json', 'sass']
let { useArg = [] } = yargs.argv
if (!Array.isArray(useArg)) {
  useArg = useArg.split(',')
}
useArg.forEach((rule) => {
  if (!whitelist.includes(rule)) {
    throw new Error('Invalid use parameter')
  }
})

const includeBABEL = useArg.includes('babel')
const includeCSS = useArg.includes('css')
const includeJSON = useArg.includes('json')
const includeSASS = useArg.includes('sass')

const use = merge.smart(
  includeBABEL && tronicBABEL,
  includeCSS && tronicCSS,
  includeJSON && tronicJSON,
  includeSASS && tronicSASS,
)

export default use
