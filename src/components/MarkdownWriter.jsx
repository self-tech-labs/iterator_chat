import {render} from 'mustache'
import fs from 'fs'

/* let { render } = require('mustache')
let fs = require('fs') */

export default function MarkdownWriter ({result}) {
  let template = 'Result: {{result}}'
  let text = { result }
  let output = render(template, text)

  return (
    <div>
      <button onClick={() => {
        fs.writeFile('/resultmdfile.md', output, (err) => {
          if (err) throw err
          console.log('Markdown file saved')
        })
      }}>Save as Markdown</button>
    </div>
  )
}

