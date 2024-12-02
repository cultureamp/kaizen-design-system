import React, { useState, HTMLAttributes, useId, useEffect } from 'react'
import classnames from 'classnames'
import { OverrideClassName } from '~components/types/OverrideClassName'
import { createSchemaWithAll } from '../RichTextEditor/schema'
import { EditorContentArray } from '../types'
import { useRichTextEditor } from '../utils/core'
import { ProseMirrorModel, ProseMirrorState } from '../utils/prosemirror'
import styles from './RichTextContent.module.scss'

export type RichTextContentProps = {
  content: EditorContentArray
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, 'content'>>

export const RichTextContent = (props: RichTextContentProps): JSX.Element => {
  const { content, classNameOverride, ...restProps } = props
  const [schema] = useState<ProseMirrorModel.Schema>(createSchemaWithAll())
  const editorId = useId()

  useEffect(() => {
    // prosemirror only allows us to set this to false (which has caused a strange bug in the platform)
    // so we have to hack a bit to remove the attribute completely
    document.getElementById(editorId)?.removeAttribute('contenteditable')
    // @todo: Fix if possible - avoiding breaking in eslint upgrade
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [editorRef] = useRichTextEditor(
    ProseMirrorState.EditorState.create({
      doc: ProseMirrorModel.Node.fromJSON(schema, {
        type: 'doc',
        content,
      }),
      schema,
    }),
    {
      id: editorId,
    },
    {
      editable: false,
    },
  )

  return (
    <div ref={editorRef} className={classnames(styles.content, classNameOverride)} {...restProps} />
  )
}

RichTextContent.displayName = 'RichTextContent'
