import authAPI from "apis/authAPI";
import useRequest from "hooks/useRequest";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
// data: taiKhoan, matKhau, email, hoTen, soDt
const Register = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    // Chế độ kích hoạt validation, mặc định là onSubmit
    mode: "onTouched",
  });
  const { data: handleRegister, isLoading } = useRequest(
    (values) => authAPI.register(values),
    { isManual: true }
  );
  console.log(handleRegister);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      await handleRegister(values);
      // Sau khi đăng ký thành công, ta cần chuyển user về trang login
      navigate("/login");
    } catch (error) {
      // Đăng ký thất bại show error ra cho user thấy
      notification.error({
        message: "Đăng ký thất bại",
        description: error,
      });
    }
  };

  // const onError = (error) => {
  //   console.log(error);
  // };

  return (
    <div>
      <h1 className="text-center fs-3 fw-bold">Register</h1>
      <Form
        // onSubmit={handleSubmit(onSubmit)}
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
            minLength: {
              value: 5,
              message: "Tài khoản phải từ 5 đến 20 ký tự",
            },
            maxLength: {
              value: 20,
              message: "Tài khoản phải từ 5 đến 20 ký tự",
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
        {/* password  */}
        <Controller
          name="matKhau"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Mật khẩu không được để trống",
            },
            minLength: {
              value: 5,
              message: "Mật khẩu phải từ 5 đến 20 ký tự",
            },
            maxLength: {
              value: 20,
              message: "Mật khẩu phải từ 5 đến 20 ký tự",
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
        {/* Email  */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Email không được để trống",
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email không đúng định dạng",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label="Email"
              validateStatus={error ? "error" : ""}
              help={error?.message}
            >
              <Input placeholder="Email" type="text" {...field} />
            </Form.Item>
          )}
        />
        {/* fullName  */}
        <Controller
          name="hoTen"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Họ tên không được để trống",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label="Họ tên"
              validateStatus={error ? "error" : ""}
              help={error?.message}
            >
              <Input placeholder="Họ và tên" type="text" {...field} />
            </Form.Item>
          )}
        />
        <Controller
          name="soDt"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Số điện thoại không được để trống",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Form.Item
              label="Số điện thoại"
              validateStatus={error ? "error" : ""}
              help={error?.message}
            >
              <Input placeholder="Số điện thoại" type="text" {...field} />
            </Form.Item>
          )}
        />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={isLoading}
            loading={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            Đăng Ký
          </Button>
        </Form.Item>
        <hr />
        <Form.Item>
          Bạn đã có tài khoản?
          <Link style={{ color: "#fb4226" }} to="/login">
            {" "}
            Đăng nhập
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
