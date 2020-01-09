import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: '#EEE'
    },
    container_content: {
        flex: 1,
        flexDirection: 'row'
    },
    views: {
        flex: 1,
        flexGrow: 6,
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderColor: '#dedede',
        borderStyle: 'solid',
        paddingVertical: 5,
        marginVertical: 10,
        backgroundColor: '#DDD',
        borderRadius: 5
    },
    size_title: {
        fontSize: 20,
        fontWeight: "700" 
    },
    size_des: {
        fontSize: 16
    },
    size_note: {
        paddingVertical: 5,
        color: 'gray'
    },
    container_image: {
        borderRadius: 50,
        backgroundColor: '#14deff',
        flex: 1,
        height: 46,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        width: 32,
        height: 32
    },
    border: {
        flexGrow: 20,
        borderStyle: 'solid',
        borderRightWidth: 1,
        position: 'relative',
        right: 25
    },
    none: {
        flexGrow: 20
    }
  });

class Task extends Component {
    state = {
        data: [
            {
                url: require('../image/click.png'),
                title: "Truy cập trang chương trình",
                description: "Truy cập vào liên kết chương trình trên Yolla Network hoặc website chương trình",
                isRender: true
            },
            {
                url: require('../image/login.png'),
                title: "Đăng nhập",
                description: "Đăng nhập tài khoản Yolla Network bằng số điện thoại hoặc Facebook",
                isRender: true
            },
            {
                url: require('../image/coupon.png'),
                title: "Nhận ưu đãi miễn phí",
                description: `Chọn vào nút "Nhận mã ưu đãi" để nhận ưu đãi từ chương trình cho bạn`,
                isRender: true
            },
            {
                url: require('../image/share.png'),
                title: "Chia sẽ chương trình",
                description: "Chọn nút Chia sẻ hoặc Copy liên kết và chia sẻ cho chương trình cho bạn bè. Bạn cũng có thể chia sẻ trực tiếp cho bạn bè băng QR code có sẵn trên trang",
                note: "Lưu ý: Chia sẻ link từ trang chiến dịch hoặc từ website Yolla Network để có thể đạt điều kiện nhận thưởng",
                isRender: true
            },
            {
                url: require('../image/gift.png'),
                title: "Ưu đãi và phần thưởng",
                description: "Truy cập mục Ưu đãi của tôi để xem mã ưu đãi & mã nhận thưởng. Mã nhận thưởng sẽ được trao tự động khi bạn đạt đủ điều kiện nhận thưởng theo chi tiết của chương trình",
                isRender: true
            },
            {
                url: require('../image/present.png'),
                title: "Sử dụng phần thưởng",
                description: "Đến cửa hàng và sử dụng mã phần thưởng của mình bằng cách cung cấp mã phần thưởng cho nhân viên cửa hàng để nhận thưởng",
                isRender: false
            }
        ]
    }
    render() {
        const { data } = this.state
        return (
            <View style={styles.container}>
                {
                    data.map( (item, index) => (
                        <View key={index} style={styles.container_content}>
                            <View style={{flex: 1, flexGrow: 1}}>
                                <View style={styles.container_image}>
                                    <Image source={item.url} style={styles.image}/>
                                </View>
                                { item.isRender && <View style={styles.border} />}
                                { !item.isRender && <View style={styles.none} />}
                            </View>
                            <View style={styles.views}>
                                <Text style={styles.size_title}>{item.title}</Text>
                                <Text style={styles.size_des}>{item.description}</Text>
                                {
                                    item.note && <Text style={styles.size_note}>{item.note}</Text>
                                }
                            </View>
                        </View>
                    ))
                }
            </View>
        )
    }
}

export default Task;