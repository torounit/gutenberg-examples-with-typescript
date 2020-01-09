import * as React from 'react';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

const edit: React.FC = () => <div>Hello World, step 1 (from the editor).</div>
const save: React.FC = () => <div>Hello World, step 1 (from the editor).</div>

registerBlockType( 'gutenberg-examples/example-01-basic-esnext', {
	attributes: {},
	title: __( 'Example: Basic (ESNext)', 'gutenberg-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit,
	save
} );
