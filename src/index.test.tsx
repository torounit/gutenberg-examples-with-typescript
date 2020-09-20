import React from 'react'
import { create } from 'react-test-renderer'
import { BlockEditProps, BlockSaveProps } from '@wordpress/blocks';
import {
    Save, edit, BlockAttributes
} from './index'

describe("index.tsx", () => {
    beforeAll(() => {
        window.matchMedia = jest.fn()
    })
    describe('save', () => {
        let props: BlockEditProps<BlockAttributes> = {
            attributes: {
                content: 'content'
            },
            setAttributes: jest.fn(),
            className: '',
            isSelected: false,
        }
        it("should match snapshot", () => {
            expect(create(<Save {...props} />).toJSON()).toMatchSnapshot()
        })
    })
})