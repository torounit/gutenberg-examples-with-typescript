import * as React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType, BlockEditProps, BlockSaveProps } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

export interface BlockAttributes {
	content: string;
}

export const Edit: React.FC<BlockEditProps<BlockAttributes>> = ( { attributes: { content }, setAttributes, className } ) => {
	const onChangeContent = ( newContent: string ) => {
		setAttributes( { content: newContent } );
	};
	return (
		<RichText
			tagName="p"
			className={ className }
			onChange={ onChangeContent }
			value={ content }
		/>
	);
};
export const Save: React.FC<BlockSaveProps<BlockAttributes>> = ( { attributes: { content } } ) => {
	return <RichText.Content tagName="p" value={ content } />;
};

registerBlockType<BlockAttributes>( 'gutenberg-examples-with-typescript/gutenberg-examples-with-typescript', {
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	title: __( 'Example: Basic (ESNext)', 'gutenberg-examples-with-typescript' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit: Edit,
	save: Save,
} );
