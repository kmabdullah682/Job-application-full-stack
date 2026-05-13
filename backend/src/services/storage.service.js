import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadImage (buffer , fileName) {
    
    const resposne = await client.files.upload({
        file: buffer,
        fileName,
        folder: "/user_profiles"
    });

    return resposne.url
};


export { uploadImage };