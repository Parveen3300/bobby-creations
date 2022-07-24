import { Button, Image, Form, Input, Card, Typography, Space } from 'antd';
const { Title } = Typography;


const tabChange = (val) => {
    let ele = document.querySelectorAll('input');
    if (ele[val - 1].value != '') {
        ele[val].focus()
    } else if (ele[val - 1].value == '') {
        ele[val - 2].focus()
    }
}

const OtpSent = () => {

    return (
        <div className='otp-sent'>
            <Card className="position-absolute top-50 start-50 translate-middle w-50 m-auto px-md-5 py-4 shadow otp-sent">
                <div className='text-center'>
                    <Image
                        src="otpverify.png"
                        preview={false}
                        className='my-4'
                        width={80}
                    />
                    <Title level={4} className='mb-2'>Verify Email</Title>
                    <p>Enter OTP</p>
                </div>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form className="mt-5 text-center">
                        <Space>
                            <Input class="otp" type="text" onKeyUp={(val) => tabChange(1)} maxlength="1" />
                            <Input class="otp" type="text" onKeyUp={(val) => tabChange(2)} maxlength="1" />
                            <Input class="otp" type="text" onKeyUp={(val) => tabChange(3)} maxlength="1" />
                            <Input class="otp" type="text" onKeyUp={(val) => tabChange(4)} maxlength="1" />
                            <Input class="otp" type="text" onKeyUp={(val) => tabChange(5)} maxlength="1" />
                            <Input class="otp" type="text" onKeyUp={(val) => tabChange(6)} maxlength="1" />
                        </Space>
                    </Form>
                    <Button type="primary" htmlType="submit" className='w-100 mt-5'>
                        Verify
                    </Button>
                </Form>
            </Card >
        </div>
    );
}

export default OtpSent;