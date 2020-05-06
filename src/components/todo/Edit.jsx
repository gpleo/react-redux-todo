import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Select } from 'antd';
import STATUS from './status';

const Edit = ({ children, onOk, record }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    if (visible) {
      form.resetFields();
      form.setFieldsValue(record);
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible]
  );

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  function showHandler(e) {
    if (e) e.stopPropagation();
    setVisible(true);
  }

  function hideHandler() {
    setSaving(false);
    setVisible(false);
  }

  async function okHandler () {
    setSaving(true);
    try {
      const values = await form.validateFields();
      onOk(values)
        .then(() => {
          hideHandler();
        });
    } catch (errorInfo) {
      console.log('Failed: ', errorInfo);
    }
  }

  return (
    <span>
        <span onClick={showHandler}>
          { children }
        </span>

        <Modal
          title="编辑"
          visible={visible}
          confirmLoading={saving}
          onOk={okHandler}
          onCancel={hideHandler}
          getContainer={false}
        >
          <Form
            {...layout}
            form={form}
            initialValues={{
              status: record.status || STATUS[0].key,
            }}
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="状态"
              name="status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                {
                  STATUS.map(v => (
                    <Select.Option key={v.key} value={v.key}>{v.title}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </span>
  );
};

Edit.propTypes = {
  onOk: PropTypes.func.isRequired,
  record: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
  }),
};

Edit.defaultProps = {
  record: {},
};

export default Edit;