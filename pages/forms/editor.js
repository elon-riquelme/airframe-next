import React from 'react';
import faker from 'faker';
// Workaround for SSR problems
let ReactQuill = null;
if (typeof window !== 'undefined') {
    ReactQuill = require('react-quill');
}


import {
    Container,
    Card
} from './../../components';

import { HeaderMain } from "../../features/HeaderMain";

export default class Editor extends React.Component {
    state = {
        text: `
            <p>${ faker.lorem.paragraph() }</p>
            <br/>
            <p>${ faker.lorem.paragraph() }</p>
            <br/>
            <p>${ faker.lorem.paragraph() }</p>
        `
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
        ],
    }

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent'
    ]

    render() {
        return (
            <Container>
                <HeaderMain 
                    title="Editor"
                    className="mb-5 mt-4"
                />
                <p>
                    <strong>Quill</strong> is a modern rich text editor built for compatibility and extensibility.
                </p>
                <Card>
                    {
                        ReactQuill && (
                            <ReactQuill
                                value={ this.state.text }
                                onChange={ this._handleChange }
                                modules={ this.modules }
                                formats={ this.formats }
                                style={{
                                    minHeight: '480px'
                                }}
                            />
                        )
                    }
                </Card>
            </Container>
        );
    }

    _handleChange = (text) => {
        this.setState({ text })
    }
}
