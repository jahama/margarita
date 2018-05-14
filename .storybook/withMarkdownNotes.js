import { withMarkdownNotes } from '@storybook/addon-notes'
import marked from 'marked'

export default function (markdownFile) {
  return withMarkdownNotes(marked(markdownFile))
}
