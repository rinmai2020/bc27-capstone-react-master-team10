import { Button, Form, Input, notification } from "antd";
// import authAPI from "apis/authAPI";
// import useRequest from "hooks/useRequest";
import { useForm, Controller } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/authSlice";

const Login = () => {
  const {
    handleSubmit,
    // Sử dụng kết hợp với Controller thay thế cho register đối với các trường hợp component không hỗ trợ ref
    control,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  const onSubmit = async (values) => {
    try {
      // chờ cho action login thành công
      await dispatch(login(values)).unwrap();
      // Chuyển user về trang home
      navigate("/");
      notification.success({
        message: "Đăng nhập thành công",
      });
    } catch (error) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: error,
      });
    }
  };

  // Đã đăng nhập
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1 className="text-center fs-3 fw-bold">Login</h1>
      <Form
        onFinish={handleSubmit(onSubmit)}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Controller
          name="taiKhoan"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Tài khoản không được để trống",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label="Tài khoản"
              validateStatus={error ? "error" : ""}
              help={error?.message}
            >
              <Input placeholder="Tài khoản" type="text" {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="matKhau"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Mật khẩu không được để trống",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label="Mật khẩu"
              validateStatus={error ? "error" : ""}
              help={error?.message}
            >
              <Input.Password
                placeholder="Mật khẩu"
                type="password"
                {...field}
              />
            </Form.Item>
          )}
        />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={isLoading}
            loading={isLoading}
          >
            Đăng Nhập
          </Button>
        </Form.Item>
        <hr />
        <Form.Item>
          Bạn chưa có tài khoản?
          <Link style={{ color: "#fb4226" }} to="/register">
            {" "}
            Đăng kí
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
