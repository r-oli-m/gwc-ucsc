import React, { useEffect } from 'react';
import axios from 'axios';

const InstagramEmbed = ({ url }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const fetchInstagramPost = async () => {
        try {
            const response = await axios.get(`/fetch-instagram-post?postUrl=${url}`);
            console.log('Instagram post:', response.data);
        } catch (error) {
            console.error('Error fetching Instagram post:', error);
        }
    };

    useEffect(() => {
        fetchInstagramPost();
    }, [url]);

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '99.375%',
                width: '-webkit-calc(100% - 2px)',
                width: 'calc(100% - 2px)',
            }}
        >
            <div style={{ padding: '16px' }}>
                <a
                    href={url}
                    style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                    target="_blank"
                >
                    Loading...
                </a>
                <p
                    style={{
                        color: '#c9c8cd',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        lineHeight: '17px',
                        marginBottom: '0',
                        marginTop: '8px',
                        overflow: 'hidden',
                        padding: '8px 0 7px',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <a
                        href={url}
                        style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '17px',
                            textDecoration: 'none',
                        }}
                        target="_blank"
                    >
                        View on Instagram
                    </a>
                </p>
            </div>
        </blockquote>
    );
};

export default InstagramEmbed;
