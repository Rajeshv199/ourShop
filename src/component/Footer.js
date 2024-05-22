import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='m-auto' style={{width:"90%"}}>
                <div className='d-flex justify-content-between'>
                    <div style={{width:"28%"}}>
                        <h4 className='text-dark'>Shop Non-Stop on freeshop</h4>
                        <div className='text-center'>Trusted by more than 1 Crore Indians Cash on Delivery | Free Delivery</div>
                    </div>
                    <div className='d-flex'>
                        <div className='fontWeight mx-4'>
                            <div className='my-1'>About</div>
                            <div className='my-1'>Home</div>
                            <div className='my-1'>Contact Us</div>
                            <div className='my-1'>FQA</div>
                            <div className='my-1'>Legal and Policies</div>
                        </div>
                        <div>
                            <h5 className='fw-bold'>Reach out to us</h5>
                            <div className='d-flex justify-content-around'>
                                <Link to="#">
                                <img width="20px" src='https://s3-alpha-sig.figma.com/img/4847/0c16/156b569eb9973bf394aed18e94ccfbef?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVsvs24W8JW6gdr1hKVuDZ4afBMcZwEnGM3qJ6KbP6lbOzcSCz3LNH3TWbBaTe4~JZu8FkBdOqgV2u-wGeIqh85tuXkT7iQocgRTfFpK8diYqb70lP~Yu2mj2WBp~-06KzJ5k1OsXMiE58Z88HrW~7Inf64sQEsBVvhSMecJj6m5GwoB04hIGuNOXOF8sL3Ig5L-DW8HCGh89rCYiRAdrnTdl4VFEsU619TRVeqbm0yoIOwe9j~HtNMkcGDMlFBZ2al0JAtutpmjtKUYYNChSUW253-hOtQ3OXvL2Y36ChNVUfHzJSuTnrJ1ivEOfXEoE5qJt2BI10I6iieLjgydKg__' alt=''/>
                                </Link>
                                <Link to="#">
                                <img width="20px" src='https://s3-alpha-sig.figma.com/img/02f0/3f9b/498327879a370280ff4a9a94f2526e2c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PEvZ-qFmZNFgAZv~clNn7VTkkPfjYfWscdoWKx63PXllS9qgEMN8gnE3qk0n5cpqUv5e0FxBW3wnXYudNMzaEPANXOVKKU730Rb39QeQhHxegqsEaDagIYKzrGHvGKyXUGfYj-zqQbSLu06MKv13z4SSWuzHqhWmrZjz2ltD74ISlHXL259ejmoyrCaQsPBBBcElWOTONf5dfSzgld~KL2v~o90vnscZZhmT9V-SIj7q9zEyrh4ygd~pPqY7ZkDLiayM6Qn-yhoB5jPriE9mkPYrXfIrZZcpNx1I3fqMlNCiDHBPTSU9qAFOJMwUzVjPEgSHrxhFOQ04SX0MbFJYTA__' alt=''/>
                                </Link>
                                <Link to="#">
                                <img width="20px" src='https://s3-alpha-sig.figma.com/img/5bde/8c42/64aa000ddee4e8fbfe873d44b0a7b7e9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hzWyfv9YMfwpH531tiR1G~gwNmBAF97exs3ws8mUGXgpgGxKv3CGcB27pt8Q08x5hoKfghQeoPqwjRezLMF9rgq1IyR06J59TZyjqQFmDE-Xc5-4guwC6rCUOraEzv8vITphSBzMxv0hpB6uAX5gcUnhetr0~FKtba0rDkBsSBsmLB8iJw2V1RZ1QtCL0eORbcvhxSLnae2zXZkiQC9Y6ZXTVFv79BqolHHHRnD5MnamDDdfOqLcXUI3ldCT-bwxQJYP7YF6wU996WqE~LT2rY4vWj3rqoBxfPBQPpfMqGLF4TQMMI~soiBuFAWfnnIH42rtI4yToOih1IlmwgCa7g__' alt=''/>
                                </Link>
                                <Link to="#">
                                <img width="20px" src='https://s3-alpha-sig.figma.com/img/f129/0178/c68c5570f0c09d9d69f3f39695b10fa7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TrbT8Qm96shMIJbYkvL1K8zJO9fkj2AUuew~BksZIUy3D4AEX-uttHxtYvCMxSnzh2~LSNEwPRXwNXpQvplYhQ-fg2cNMRNFibbCNhmCVRqJ4636PiQbJLWOiyFre~jp38Ge5EonmWqZ1yyM8aH1qjJnBrVBF5d7K-19iUy3j-MJu5Dn0lMXncinaFWTziaJQzuyStl1SK6s1c4MPG0Muh47Ag3xI1MJq0JJEh34fDvnPLtHfZdYzjtshhpfAQ2kuEV9EcIF4zl6SjTrtAM7cox5U7rNYoeZvK-aNkAddXZHQLz8l7RMDAaSXNJ89qvA2XCqwU9pVkzn2SULB3Wtdw__' alt=''/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Footer;