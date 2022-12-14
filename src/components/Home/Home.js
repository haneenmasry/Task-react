import React, { useState } from 'react';
import { Button, Input, Modal, Space, Table } from 'antd';

function Home() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingdata, setEditing] = useState(null);
  const [dataSource, setDataSource] = useState([
        {
            id:'1',
            name:'Hasan',
            email:'hasan@gmail.com',
            address: '10 Downing Street'
        },
        {
            id:'2',
            name:'Ali',
            email:'ali@gmail.com',
            address: '10 Downing Street',
        },
        {
            id:'3',
            name:'Hasan',
            email:'hasan@gmail.com',
            address: '10 Downing Street',
        },
        {
            id:'4',
            name:'Ali',
            email:'ali@gmail.com',
            address: '10 Downing Street',
        },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <Space size="middle">
            <Button type='dashed' onClick={() => { onEdit(record);}}>Edit</Button>
            <Button type='primary'  danger onClick={() => {onDelete(record);}}>Delete</Button>
          
          </Space>
        );
      },
    },
  ];

  const onAdd = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newdata = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newdata];
    });
  };
  const onDelete = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this data record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((item) => item.id !== record.id);
        });
      },
    });
  };
  const onEdit = (record) => {
    setIsEditing(true);
    setEditing({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditing(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' onClick={onAdd}>Add a new Data</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Data"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((item) => {
                if (item.id === editingdata.id) {
                  return editingdata;
                } else {
                  return item;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingdata?.name}
            onChange={(e) => {
              setEditing((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingdata?.email}
            onChange={(e) => {
              setEditing((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingdata?.address}
            onChange={(e) => {
              setEditing((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );

}

export default Home;