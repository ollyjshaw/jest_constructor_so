const AWS = require("aws-sdk")

const fakePutMetricData = jest.fn()
const FakeCloudWatch = jest.fn(() => ({
    putMetricData: fakePutMetricData
}))

AWS.CloudWatch = FakeCloudWatch;

const myMetrics = require("../src/metrics").myMetrics

test("real metrics does something", done => {
  myMetrics("foo", "bar", 42)
  expect(fakePutMetricData).toHaveBeenCalledTimes(1);
  done()
})

