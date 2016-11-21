var currentId: number = currentId || 0;

export default function generateUniqueId(): number {
    currentId += 1;
    return currentId;
}
