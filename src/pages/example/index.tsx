import { Tag } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="index">
      <Tag type="primary">Hello world!</Tag>
    </View>
  );
}
