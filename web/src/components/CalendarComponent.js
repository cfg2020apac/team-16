import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
import "react-big-calendar-like-google/lib/css/react-big-calendar.css"
import events from './events';
import { Row, Col, Form, DatePicker, Button, Select, Input } from "antd";
import 'antd/dist/antd.css';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const config = {
    rules: [
        {
            required: true,
            message: 'Please fill it in!',
        },
    ],
};

const TimeRelatedForm = () => {
    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const values = {
            ...fieldsValue,
            'start-date-time': fieldsValue['start-date-time'].format('YYYY-MM-DD HH:mm:ss'),
            'end-date-time': fieldsValue['end-date-time'].format('YYYY-MM-DD HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
    };

    return (
        <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
            <Form.Item name="event-name" label="Event Name">
                <Input />
            </Form.Item>
            <Form.Item name="start-date-time" label="Start Time" {...config}>
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item name="end-date-time" label="End Time" {...config}>
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item name="program-select" label="Program Select" {...config}>
                <Select>
                    <Select.Option value="program-1">Program 1</Select.Option>
                    <Select.Option value="program-2">Program 2</Select.Option>
                    <Select.Option value="program-3">Program 3</Select.Option>
                    <Select.Option value="program-4">Program 4</Select.Option>
                    <Select.Option value="program-5">Program 5</Select.Option>
                    <Select.Option value="program-6">Program 6</Select.Option>
                    <Select.Option value="program-7">Program 7</Select.Option>
                    <Select.Option value="program-8">Program 8</Select.Option>
                    <Select.Option value="program-9">Program 9</Select.Option>
                    <Select.Option value="program-10">Program 10</Select.Option>
                    <Select.Option value="program-11">Program 11</Select.Option>
                    <Select.Option value="program-12">Program 12</Select.Option>
                    <Select.Option value="program-13">Program 13</Select.Option>
                    <Select.Option value="program-14">Program 14</Select.Option>
                    <Select.Option value="program-15">Program 15</Select.Option>
                    <Select.Option value="program-16">Program 16</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name={['description']} label="Description">
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    xs: {
                        span: 24,
                        offset: 0,
                    },
                    sm: {
                        span: 16,
                        offset: 8,
                    },
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

class CalendarComponent extends React.Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <Row>
                <Col span={18} style={{ minHeight: '70vh' }}><BigCalendar events={events} /></Col>
                <Col span={6} style={{ marginTop: 100 }}><TimeRelatedForm /></Col>
            </Row>
        );
    }
}

export default CalendarComponent;