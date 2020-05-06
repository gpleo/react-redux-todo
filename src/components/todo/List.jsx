import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Popconfirm } from 'antd';
import STATUS from './status';
import Edit from './Edit';

const List = ({ loading, list, create, update, del }) => {
  const [deleting, setDeleting] = React.useState(false);

  const deleteHandle = id => {
    setDeleting(true);
    del(id)
      .then(() => {
        setDeleting(false);
      });
  };

  const columns = [{
    title: '标题',
    dataIndex: 'title',
  }, {
    title: '状态',
    dataIndex: 'status',
    render: key => STATUS.find(v => v.key === key).title,
  }, {
    title: '操作',
    render: (text, record) => (
      <div style={{ display: 'flex' }}>
        <Edit record={record} onOk={(entity) => update(record.id, entity)}>
          <Button type="link">编辑</Button>
        </Edit>
        <Popconfirm title="确认删除？" onConfirm={() => deleteHandle(record.id)}>
          <Button type="link" danger>删除</Button>
        </Popconfirm>
      </div>
    ),
  }];

  return (
    <div>
      <div>
        <Edit record={{}} onOk={create}>
          <Button type="primary">创建</Button>
        </Edit>
      </div>

      <Table loading={loading || deleting} dataSource={list} columns={columns} rowKey="id" />
    </div>
  );
};

List.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
  })),
  fetch: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
};

List.defaultProps = {
  loading: false,
  list: [],
};

export default List;
