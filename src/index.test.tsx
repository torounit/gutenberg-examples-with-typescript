import React from 'react'
import { create } from 'react-test-renderer'
import { BlockEditProps, BlockSaveProps } from '@wordpress/blocks';
import {
    Save, Edit, BlockAttributes
} from './index'

describe("index.tsx", () => {
    beforeAll(() => {
        window.matchMedia = jest.fn()
    })
    describe('save', () => {
        const props: BlockSaveProps<BlockAttributes> = {
            attributes: {
                content: 'content'
            },
        }
        it("should match snapshot", () => {
            expect(create(<Save {...props} />).toJSON()).toMatchSnapshot()
        })
    })
    describe("Edit", () => {
        const props: BlockEditProps<BlockAttributes> = {
            attributes: {
                content: 'content'
            },
            isSelected: false,
            className: '',
            setAttributes: jest.fn(),
        }
        it("should match snapshot", () => {
            expect(create(<Edit {...props} />).toJSON()).toMatchSnapshot()
        })
    })
})