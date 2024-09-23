/**
 * 파일 재구성 util
 * @author 최유경
 * @since 2024.09.18
 * @version 1.0
 *
 * <pre>
 * 수정일        수정자        수정내용
 * ----------  --------    ---------------------------
 * 2024.09.18  	최유경       최초 생성
 * </pre>
 */

export const getFileNameServer = (prefix, fileName) => {
    const today = new Date().toISOString().split('T')[0].replace(/-/g, ''); // yyyyMMdd
    const uuid = crypto.randomUUID(); // UUID v4
    const pos = fileName.lastIndexOf('.');

    const baseName = fileName.substring(0, pos);
    const ext = fileName.substring(pos + 1);

    return `${prefix}/${today}_${uuid.split('-')[0]}_${baseName}.${ext}`;
};
