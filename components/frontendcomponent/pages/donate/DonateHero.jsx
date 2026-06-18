"use client";
import Image from "next/image";
import { useState } from "react";
import Select from "../../atoms/Select";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Link from "next/link";
import Motion from "../../molecules/Motion";

export default function DonateHero() {
  const [activeTab, setActiveTab] = useState("credit-card");
  const [oneTimePayment, setOneTimePayment] = useState(["$50", "$100", "$500"]);
  const [monthlyPayment, setMonthlyPayment] = useState([
    "$100/M",
    "$150/M",
    "$200/M",
  ]);
  const [paymentTenure, setPaymentTenure] = useState(oneTimePayment);
  const [activePayment, setActivePayment] = useState(paymentTenure[0]);
  const [formData, setFormData] = useState({
    currency: "$",
    paymentAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section>
      <div className="banner donate_hero">
        <div className="bg">
          <Image
            src="/image/donate/donate-banner.jpg"
            width={1280}
            height={700}
            alt="Donate Banner"
          ></Image>
          <div className="banner-wrapper">
            <div className="container-fluid">
              <div className="main_wrapper">
                <Motion variant="fadeRight">
                  <div className="heading">
                    <p>Act Now for a Cooler Future</p>
                    <h1>Your Support Can Change Lives</h1>
                  </div>
                </Motion>
                <Motion variant="fadeLeft">
                  <div className="payment_wrapper">
                    <div className="payment-nav">
                      <ul>
                        <li
                          onClick={() => setActiveTab("credit-card")}
                          className={
                            activeTab === "credit-card" ? "active" : ""
                          }
                        >
                          <div className="icon">
                            <Image
                              src="/image/donate/credit-card.svg"
                              width={30}
                              height={30}
                              alt="Credit Card Icon"
                            />
                          </div>
                          <p>Credit Card</p>
                        </li>
                        <li
                          onClick={() => setActiveTab("paypal")}
                          className={activeTab === "paypal" ? "active" : ""}
                        >
                          <div className="icon">
                            <Image
                              src="/image/donate/paypal.svg"
                              width={30}
                              height={30}
                              alt="Paypal Icon"
                            />
                          </div>
                          <p>Paypal</p>
                        </li>
                        <li
                          onClick={() => setActiveTab("bank-transfer")}
                          className={
                            activeTab === "bank-transfer" ? "active" : ""
                          }
                        >
                          <div className="icon">
                            <Image
                              src="/image/donate/bank-transfer.svg"
                              width={30}
                              height={30}
                              alt="Bank Transfer Icon"
                            />
                          </div>
                          <p>Bank Transfer</p>
                        </li>
                        <li
                          onClick={() => setActiveTab("cheque")}
                          className={activeTab === "cheque" ? "active" : ""}
                        >
                          <div className="icon">
                            <Image
                              src="/image/donate/cheque.svg"
                              width={30}
                              height={30}
                              alt="Cheque Icon"
                            />
                          </div>
                          <p>Cheque</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-nav-content">
                      <div
                        className={`tabs ${
                          activeTab === "credit-card" ? "active" : ""
                        }`}
                      >
                        <div className="card-tenure-tab">
                          <ul className="tenure-nav">
                            <li
                              className={
                                paymentTenure === oneTimePayment ? "active" : ""
                              }
                              onClick={() => {
                                setPaymentTenure(oneTimePayment);
                                setActivePayment(oneTimePayment[0]);
                              }}
                            >
                              One Time
                            </li>
                            <li
                              className={
                                paymentTenure === monthlyPayment ? "active" : ""
                              }
                              onClick={() => {
                                setPaymentTenure(monthlyPayment);
                                setActivePayment(monthlyPayment[0]);
                              }}
                            >
                              Monthly
                            </li>
                          </ul>
                          <div className="popular_wrap">
                            <p>Most Popular</p>
                            <div className="payment-quant">
                              {paymentTenure.map((item, index) => (
                                <div
                                  className={`pay_val ${activePayment === item ? "active" : ""}`}
                                  onClick={() => setActivePayment(item)}
                                  key={index}
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="enter_amount form">
                            <Select
                              classname="select_currency"
                              label={formData.currency}
                              name="currency"
                              id="currency"
                              value={formData.currency}
                              options={[
                                { value: "USD", label: "$" },
                                { value: "EUR", label: "€" },
                                { value: "GBP", label: "£" },
                              ]}
                              onChange={handleChange}
                            />
                            <Input
                              classname="amount"
                              placeholder={paymentTenure[0]}
                              type="number"
                              name="paymentAmount"
                              id="paymentAmount"
                              value={formData.paymentAmount}
                              onChange={handleChange}
                            />
                          </div>
                          <Button>Donate & Support</Button>
                        </div>
                      </div>
                      <div
                        className={`tabs ${activeTab === "paypal" ? "active" : ""}`}
                      >
                        <div className="paypal_wrap">
                          <figure>
                            <Image
                              src="/image/donate/paypal_image.jpg"
                              width={390}
                              height={380}
                              alt="Paypal Image"
                            ></Image>
                          </figure>
                          <Button>Donate Now</Button>
                        </div>
                      </div>
                      <div
                        className={`tabs ${activeTab === "bank-transfer" ? "active" : ""}`}
                      >
                        <div className="bank_wrap">
                          <figure>
                            <Image
                              src="/image/donate/bank-icon.svg"
                              width={141}
                              height={141}
                              alt="Bank Transfer Icon"
                            ></Image>
                          </figure>
                          <p>
                            If you would like to make a donation via Bank
                            Transfer please send us an email to
                          </p>
                          <Link href="mailto:donations@meer.org">
                            donations@meer.org
                          </Link>
                        </div>
                      </div>
                      <div
                        className={`tabs ${activeTab === "cheque" ? "active" : ""}`}
                      >
                        <div className="cheque_wrap">
                          <figure>
                            <Image
                              src="/image/icon.svg"
                              width={60}
                              height={40}
                              alt="Meer Icon"
                            ></Image>
                          </figure>
                          <p>
                            To donate by check, please make your check payable
                            to “Social and Environmental Entrepreneurs” (MEER’s
                            fiscal sponsor), write “MEER” on the memo line, and
                            mail the check to:
                          </p>
                          <Link href="">
                            MEER23564 Calabasas Road, Suite 201 Calabasaas, CA
                            91302
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Motion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
