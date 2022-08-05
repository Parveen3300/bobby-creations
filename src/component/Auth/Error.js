import { Button, Image, Form, Input, Card, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const { Title } = Typography;

const Error = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle text-center ">
            <Title level={4} className='mb-3' style={{ fontSize: "15rem" }}>404</Title>
            <p>Page not found</p>
            <Button href='/login'>Back</Button>
        </div >
    );
}

export default Error;