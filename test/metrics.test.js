const AWS = jest.mock("aws-sdk")

class FakeMetrics {
  constructor() {
    this.calls = 0
  }
  putMetricData(foo,callback) {
    callback(null, "yay!")
    this.calls ++
  }
}

const fake = new FakeMetrics()
AWS.CloudFormation = jest.fn( (props) => fake)

const putOurMetric = require("../src/metrics").putOurMetric

test("real metrics does something", done => {
  putOurMetric("foo", "bar", 42)
  expect(fake.calls).toEqual(1)
  done()
})

