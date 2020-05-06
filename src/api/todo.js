let list = [{
  id: 1,
  title: 'React简单示例演示任务',
  status: 'completed',
}, {
  id: 2,
  title: '博客更新',
  status: 'pending',
}, {
  id: 3,
  title: 'React Redux示例演示任务',
  status: 'processing',
}];
let maxId = 3;

export const fetch = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(list), 2000);
  });
};

export const create = entity => {
  return new Promise(resolve => {
    setTimeout(() => {
      list = [ ...list, { ...entity, id: ++maxId }];
      resolve();
    }, 2000);
  });
};

export const update = (id, entity) => {
  return new Promise(resolve => {
    setTimeout(() => {
      list = list.map(v  => v.id === id ? { ...entity, id } : v);
      resolve();
    }, 2000);
  });
};

export const del = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      list = list.filter(v => v.id !== id);
      resolve();
    }, 2000);
  });
};
