window.translations = {
    vi: {
        meta: { title: 'Nguyễn Hoàng Long | Portfolio Kỹ Sư' },
        brand: { logo: 'WHLong' },
        nav: {
            home: 'Trang chủ',
            about: 'Giới thiệu',
            arsenal: 'Chuyên môn', // Đổi từ "Kho vũ khí" sang "Chuyên môn" cho formal
            projects: 'Dự án',
            experience: 'Kinh nghiệm',
            education: 'Học vấn',
            contact: 'Liên hệ'
        },
        hero: {
            name: 'Nguyễn Hoàng Long',
            role: 'Kỹ sư Nghiên cứu AI | Kỹ sư Backend',
            tagline: 'Kiến tạo các hệ thống trí tuệ nhân tạo siêu nhận thức với tư duy học tập phi tuyến.',
            status: 'Sẵn sàng cho các dự án R&D và Hợp tác Mã nguồn mở',
            location: 'Hà Nội, Việt Nam',
            cta: 'Khám phá Dự án',
            secondary: 'Liên hệ Hợp tác'
        },
        about: {
            title: 'Tổng quan',
            body: 'Là một Kỹ sư Phần mềm và Nghiên cứu viên AI với 4 năm kinh nghiệm chuyên sâu trong R&D. Tôi không chỉ lập trình, mà tập trung kiến giải các bài toán phức tạp thông qua tư duy hệ thống và các mô hình học sâu tiên tiến. Thế mạnh cốt lõi của tôi là khả năng "Học tập phi tuyến tính" (Nonlinear Learning), cho phép làm chủ các miền tri thức mới trong thời gian kỷ lục. Tôi theo đuổi sự hoàn hảo trong kỹ thuật, từ Lập trình thi đấu, Bảo mật hệ thống đến Kiến trúc AGI.',
            note: 'Đam mê: Kỹ thuật chuyên sâu & Đổi mới sáng tạo'
        },
        arsenal: {
            title: 'Năng lực Kỹ thuật',
            languages: {
                title: 'Ngôn ngữ Lập trình',
                items: { python: 'Python (Expert)', cpp: 'C/C++ (Expert)', ts: 'TypeScript (Advanced)' }
            },
            ai: {
                title: 'AI & Kỹ thuật Dữ liệu',
                items: { pytorch: 'PyTorch (Expert)', vectordb: 'VectorDB (Expert)', graphdb: 'GraphDB (Advanced)' }
            },
            specialty: {
                title: 'Lĩnh vực Nghiên cứu',
                items: { meta: 'Kiến trúc Siêu nhận thức (Metacognitive)', drug: 'Tái định vị thuốc (Drug Repurposing)', rd: 'Nghiên cứu & Phát triển (R&D)' }
            },
            backend: {
                title: 'Backend & Frameworks',
                items: {
                    fastapi: 'FastAPI (Senior)',
                    django: 'Django (Expert)',
                    nest: 'NestJS (Expert)',
                    next: 'Next.js (Advanced)'
                }
            },
            devops: {
                title: 'Hạ tầng & DevOps',
                items: { git: 'Git Workflow', cicd: 'CI/CD Pipelines', docker: 'Docker/Containerization', aws: 'AWS Cloud', k6: 'K6 (Load Testing)' }
            },
            database: {
                title: 'Cơ sở dữ liệu',
                items: {
                    sql: 'SQL (PostgreSQL/MariaDB)',
                    redis: 'Redis (Caching/Queue)',
                    kafka: 'Kafka (Event Streaming)',
                    mongodb: 'MongoDB',
                    minio: 'MinIO (Object Storage)'
                }
            }
        },
        projects: {
            title: 'Dự án Trọng điểm',
            biomind: {
                title: 'BioMind-DR: Trí tuệ Siêu nhận thức Y sinh',
                subtitle: 'Hệ thống Đa tác tử mô phỏng cơ chế tư duy não bộ trong khám phá dược phẩm.',
                role: 'Vai trò: Trưởng dự án & Nghiên cứu viên chính (1 năm)',
                problem: 'Vấn đề: Quy trình tái định vị thuốc hiện tại thiếu tính liên kết và khả năng suy luận sâu. Yêu cầu đặt ra là một hệ thống có khả năng kiểm chứng giả thuyết khoa học tự động.',
                solution: {
                    title: 'Giải pháp: Phát triển kiến trúc Multi-Agent Leader-Expert-Council dựa trên mô hình Bộ nhớ Siêu nhận thức (Mô phỏng Hippocampus & Neocortex).',
                    fast: 'Hệ thống Nhanh (Hippocampus): Sử dụng L0 Working Memory (Redis) & L1 Episodic Buffer (Kafka) để xử lý ngữ cảnh thời gian thực.',
                    slow: 'Hệ thống Chậm (Neocortex): L2 Knowledge Core vận hành trên KuzuDB với cấu trúc đồ thị tri thức.',
                    bitemporal: 'Đồ thị lưỡng thời gian (Bi-temporal): Quản lý tính hợp lệ của tri thức theo dòng lịch sử.',
                    evidence: 'Đồ thị Bằng chứng (Evidence Graph): Cô lập và xử lý dữ liệu mâu thuẫn thông qua cơ chế thẩm định của Council Agent.',
                    consolidation: 'Củng cố bộ nhớ: L3 Strategy (MariaDB) & L4 Long-term Storage (MinIO) hỗ trợ học tập từ kinh nghiệm suy luận.'
                },
                impact: {
                    title: 'Kết quả & Tác động:',
                    sota: 'Vượt hiệu suất SOTA: Đạt 48.2% trên HLE và 94.7% trên MRCR v2, vượt qua Gemini 3.0 Pro và GPT-5.1 trong các tác vụ suy luận y sinh phức tạp.',
                    drylab: 'Tích hợp thành công phòng thí nghiệm ảo (Dry-lab) để xác thực giả thuyết.'
                },
                stack: 'Công nghệ: Python, PyTorch, KuzuDB, Kafka, Redis, MariaDB, MinIO.',
                link: 'Xem Demo trực tuyến'
            },
            pulsar: {
                title: 'PulsarPath: AI Giáo dục Cá nhân hóa Thế hệ mới',
                subtitle: 'Tối ưu hóa lộ trình học tập quy mô lớn thông qua phân tích nhận thức.',
                role: 'Vai trò: Nhà phát triển độc lập (3 tháng - Giai đoạn Beta)',
                concept: 'Khái niệm: Nền tảng sử dụng AI để phân tích mô thức tư duy người học, từ đó thiết kế lộ trình đào tạo siêu cá nhân hóa (Hyper-personalized), tối đa hóa hiệu suất tiếp thu.',
                stack: 'Công nghệ: Next.js, NestJS, AI Analytics Engine.',
                link: 'Truy cập: pulsarpath.dev'
            }
        },
        quote: '"Định hình giới hạn mới với Tư duy Phi tuyến và AI Siêu nhận thức."',
        experience: {
            title: 'Kinh nghiệm Chuyên môn',
            vnoi: {
                title: 'VNOI (Vietnam Olympiad in Informatics) | Thành viên Ban Kỹ thuật',
                period: '09/2025 - Hiện tại',
                desc1: 'Chịu trách nhiệm duy trì, vận hành và tối ưu hóa hệ thống chấm bài trực tuyến (VNOI Online Judge - oj.vnoi.info).',
                desc2: 'Đảm bảo tính ổn định hệ thống (System Stability), xử lý các lỗi nghiêm trọng và cải thiện hiệu năng xử lý cho hàng nghìn thí sinh.'
            }
        },
        education: {
            title: 'Học vấn & Thành tựu',
            school: {
                title: 'THPT Lê Hồng Phong',
                period: '2023 - 2026',
                focus: 'Chuyên ngành: Khoa học Máy tính & Toán học.'
            },
            honors: {
                title: 'Giải thưởng & Công nhận',
                items: {
                    cp: 'Top 2% Lập trình thi đấu tại Việt Nam.',
                    sef: 'Top 10% Cuộc thi Khoa học Kỹ thuật.',
                    security: 'Nghiên cứu Bảo mật: Được ghi nhận vì phát hiện lỗ hổng nghiêm trọng trên các nền tảng EdTech (Edubit/Unica, Eduquiz) với ~700k người dùng.',
                    oss: 'Mã nguồn mở: Đóng góp tích cực cho các dự án Letta, VNOI và Hetio.'
                }
            }
        },
        contact: {
            title: 'Liên hệ',
            desc: 'Sẵn sàng thảo luận về các ý tưởng công nghệ đột phá.',
            email: { label: 'Email', card: 'nhl08.contact@gmail.com' },
            phone: { label: 'Điện thoại', card: '(+84) 965 940 805' },
            github: { label: 'GitHub', card: 'github.com/whlongg' }
        },
        footer: { copy: '© 2026 Nguyen Hoang Long. All Rights Reserved.' },
        music: { title: 'Trạng thái:', artist: 'Deep Focus Mode' },
        aria: {
            themeToggle: 'Giao diện Sáng/Tối',
            langToggle: 'Đổi ngôn ngữ',
            playPause: 'Bật/Tắt nhạc',
            github: 'Truy cập GitHub',
            email: 'Gửi Email'
        }
    },
    en: {
        meta: { title: 'Nguyen Hoang Long | Research Engineer Portfolio' },
        brand: { logo: 'WHLong' },
        nav: {
            home: 'Home',
            about: 'About',
            arsenal: 'Proficiency', // Changed from "Arsenal" to "Proficiency" for professional tone
            projects: 'Projects',
            experience: 'Experience',
            education: 'Education',
            contact: 'Contact'
        },
        hero: {
            name: 'Nguyen Hoang Long',
            role: 'AI Research Engineer | Backend Developer',
            tagline: 'Architecting Metacognitive AI Systems with Nonlinear Learning Velocity.',
            status: 'Open for R&D Collaboration & Freelance Opportunities',
            location: 'Hanoi, Vietnam',
            cta: 'View Work',
            secondary: 'Let’s Connect'
        },
        about: {
            title: 'Professional Profile',
            body: 'I am an AI Research Engineer and Software Architect with 4 years of intensive experience in software R&D. Beyond coding, I specialize in dissecting complex problems through system thinking and advanced deep learning models. My core differentiator is "Nonlinear Learning"—the ability to master new domains in record time. I am driven by technical excellence, ranging from Competitive Programming and Security Research to AGI Architecture.',
            note: 'Driven by Innovation & Deep Tech'
        },
        arsenal: {
            title: 'Technical Proficiency',
            languages: {
                title: 'Languages',
                items: { python: 'Python (Expert)', cpp: 'C/C++ (Expert)', ts: 'TypeScript (Advanced)' }
            },
            ai: {
                title: 'AI & Data Engineering',
                items: { pytorch: 'PyTorch (Expert)', vectordb: 'VectorDB (Expert)', graphdb: 'GraphDB (Advanced)' }
            },
            specialty: {
                title: 'Research Focus',
                items: { meta: 'Metacognitive Architectures', drug: 'Computational Drug Repurposing', rd: 'R&D' }
            },
            backend: {
                title: 'Backend Ecosystem',
                items: {
                    fastapi: 'FastAPI (Senior)',
                    django: 'Django (Expert)',
                    nest: 'NestJS (Expert)',
                    next: 'Next.js (Advanced)'
                }
            },
            devops: {
                title: 'Infrastructure & DevOps',
                items: { git: 'Git Workflow', cicd: 'CI/CD Pipelines', docker: 'Docker/Containerization', aws: 'AWS Cloud', k6: 'K6 (Performance Testing)' }
            },
            database: {
                title: 'Data Persistence',
                items: {
                    sql: 'SQL (PostgreSQL/MariaDB)',
                    redis: 'Redis (Caching)',
                    kafka: 'Kafka (Event Streaming)',
                    mongodb: 'MongoDB',
                    minio: 'MinIO (Object Storage)'
                }
            }
        },
        projects: {
            title: 'Flagship Projects',
            biomind: {
                title: 'BioMind-DR: Biomedical Metacognitive Intelligence',
                subtitle: 'A Multi-Agent System simulating human cognitive processes for drug discovery.',
                role: 'Role: Project Lead & Principal Researcher (1 Year)',
                problem: 'The Challenge: Traditional drug repurposing is fragmented and lacks deep inferential capabilities. The goal was to engineer a system capable of autonomous scientific hypothesis verification.',
                solution: {
                    title: 'The Solution: Developed a Leader-Expert-Council Multi-Agent System based on Metacognitive Memory Architecture (simulating Hippocampus & Neocortex).',
                    fast: 'Fast System (Hippocampus): Implemented L0 Working Memory (Redis) & L1 Episodic Buffer (Kafka) for real-time context processing.',
                    slow: 'Slow System (Neocortex): L2 Knowledge Core powered by KuzuDB with Knowledge Graph integration.',
                    bitemporal: 'Bi-temporal Graph: Manages knowledge validity across historical timelines.',
                    evidence: 'Evidence Graph: Isolates conflicting data for adjudication by the Council Agent.',
                    consolidation: 'Memory Consolidation: L3 Strategy (MariaDB) & L4 Long-term Storage (MinIO) enable iterative learning from past inferences.'
                },
                impact: {
                    title: 'Key Outcomes:',
                    sota: 'Surpassed SOTA Benchmarks: Achieved 48.2% on HLE and 94.7% on MRCR v2, outperforming Gemini 3.0 Pro and GPT-5.1 in biomedical reasoning tasks.',
                    drylab: 'Successfully integrated a virtual Dry-lab for hypothesis validation.'
                },
                stack: 'Tech Stack: Python, PyTorch, KuzuDB, Kafka, Redis, MariaDB, MinIO.',
                link: 'Live Demo'
            },
            pulsar: {
                title: 'PulsarPath: Next-Gen Personalized Education AI',
                subtitle: 'Scalable hyper-personalization of learning pathways.',
                role: 'Role: Independent Developer (3 Months - Closed Beta)',
                concept: 'Concept: An AI-driven platform that analyzes individual cognitive patterns to generate hyper-personalized learning roadmaps, optimizing knowledge acquisition efficiency.',
                stack: 'Tech Stack: Next.js, NestJS, AI Analytics Engine.',
                link: 'Visit: pulsarpath.dev'
            }
        },
        quote: '"Redefining limits with Nonlinear Learning & Metacognitive AI."',
        experience: {
            title: 'Professional Experience',
            vnoi: {
                title: 'VNOI (Vietnam Olympiad in Informatics) | Technical Team',
                period: 'Sep 2025 - Present',
                desc1: 'Responsible for maintaining and optimizing the VNOI Online Judge (VOJ) system (oj.vnoi.info).',
                desc2: 'Ensuring system stability, resolving critical incidents, and optimizing performance for thousands of competitive programmers.'
            }
        },
        education: {
            title: 'Education & Achievements',
            school: {
                title: 'Le Hong Phong High School',
                period: '2023 - 2026',
                focus: 'Major: Computer Science & Mathematics.'
            },
            honors: {
                title: 'Honors & Awards',
                items: {
                    cp: 'Top 2% Competitive Programming in Vietnam.',
                    sef: 'Top 10% National Science & Engineering Fair.',
                    security: 'Security Research: Acknowledged for reporting critical vulnerabilities in EdTech platforms (Edubit/Unica, Eduquiz) affecting ~700k users.',
                    oss: 'Open Source: Active contributor to Letta, VNOI, and Hetio.'
                }
            }
        },
        contact: {
            title: 'Contact',
            desc: 'Open to discussing breakthrough technical ideas.',
            email: { label: 'Email', card: 'nhl08.contact@gmail.com' },
            phone: { label: 'Phone', card: '(+84) 965 940 805' },
            github: { label: 'GitHub', card: 'github.com/whlongg' }
        },
        footer: { copy: '© 2026 Nguyen Hoang Long. All Rights Reserved.' },
        music: { title: 'Status:', artist: 'Deep Focus Mode' },
        aria: {
            themeToggle: 'Toggle Theme',
            langToggle: 'Switch Language',
            playPause: 'Toggle Music',
            github: 'Go to GitHub',
            email: 'Send Email'
        }
    }
};