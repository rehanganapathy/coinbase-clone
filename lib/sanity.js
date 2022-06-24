import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'tzshry5w',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'ske4825pvaubZpV0JERiaX53bc3DxKFL0iTZ9yXGi85hlk4ccHtnxjjmTdFvW9QvpNdFtC9hLuvjAvQDsxwsJT2FFZhyEfHfw5yETsFSJUWMQ8Jse9E4RklI0VtlGnnZntnuRlLeA4oXWGt6aaDSYOnQrlqPuZx7xwmPbZlHjDJxyPziYlIM',
    useCdn: false
})