export const getFileNameServer = (prefix, fileName) => {
    const today = new Date().toISOString().split('T')[0].replace(/-/g, ''); // yyyyMMdd
    const uuid = crypto.randomUUID(); // UUID v4
    const pos = fileName.lastIndexOf('.');

    const baseName = fileName.substring(0, pos);
    const ext = fileName.substring(pos + 1);

    return `${prefix}/${today}_${uuid.split('-')[0]}_${baseName}.${ext}`;
};
