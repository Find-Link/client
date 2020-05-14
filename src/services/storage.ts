class Storage {
  static deleteItem = (key: string): void => localStorage.removeItem(key);

  static getItem = (key: string): any => {
    const data = localStorage.getItem(key);

    if (data) {
      const { value, expire } = JSON.parse(data);
      const currentTime = new Date().getTime() / 1000;

      if (expire >= currentTime) {
        return value;
      }
    }

    return null;
  };

  static setItem = (key: string, value: any, expire = 604800): void => {
    const expireTime = (new Date().getTime() / 1000) + expire;
    return localStorage.setItem(key, JSON.stringify({ value, expire: expireTime }));
  };
}

export default Storage;
